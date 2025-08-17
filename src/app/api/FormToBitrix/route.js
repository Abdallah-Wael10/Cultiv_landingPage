import axios from "axios";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, phone, company } = body;
  const BASE = process.env.BITRIX_BASE;

  const post = (method, payload) =>
    axios
      .post(`${BASE}/${method}.json`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => r.data);

  // 1) Find duplicates by EMAIL + PHONE
  const dupByEmail = email
    ? await post("crm.duplicate.findbycomm", { type: "EMAIL", values: [email] })
    : { result: {} };
  const dupByPhone = phone
    ? await post("crm.duplicate.findbycomm", { type: "PHONE", values: [phone] })
    : { result: {} };

  const contactIds = new Set([
    ...(dupByEmail.result?.CONTACT ?? []),
    ...(dupByPhone.result?.CONTACT ?? []),
  ]);
  const companyIds = new Set([
    ...(dupByEmail.result?.COMPANY ?? []),
    ...(dupByPhone.result?.COMPANY ?? []),
  ]);

  // 2) Ensure Contact exists
  let contactId = [...contactIds][0];
  if (!contactId) {
    const addContact = await post("crm.contact.add", {
      fields: {
        NAME: firstName || "",
        LAST_NAME: lastName || "",
        PHONE: phone ? [{ VALUE: phone, VALUE_TYPE: "WORK" }] : [],
        EMAIL: email ? [{ VALUE: email, VALUE_TYPE: "WORK" }] : [],
        SOURCE_ID: "WEB",
      },
      params: { REGISTER_SONET_EVENT: "N" },
    });
    if (!addContact.result) {
      return Response.json(
        { step: "contact.add", error: addContact },
        { status: 400 }
      );
    }
    contactId = addContact.result;
  }

  // 3) Ensure Company exists (optional)
  let companyId = [...companyIds][0];
  if (!companyId && company) {
    const addCompany = await post("crm.company.add", {
      fields: { TITLE: company, SOURCE_ID: "WEB" },
    });
    if (addCompany.result) companyId = addCompany.result;
  }

  // 4) Create Deal in category 2, stage C2:NEW
  const dealResp = await post("crm.deal.add", {
    fields: {
      CATEGORY_ID: Number(process.env.DEFAULT_CATEGORY ?? 2),
      STAGE_ID: process.env.DEFAULT_STAGE ?? "C2:NEW",
      SOURCE_ID: "WEB",
      CONTACT_ID: contactId,
      ...(companyId ? { COMPANY_ID: companyId } : {}),
      CURRENCY_ID: process.env.DEFAULT_CURRENCY ?? "EGP",
      OPPORTUNITY: 0,
    },
    params: { REGISTER_SONET_EVENT: "Y" },
  });

  if (!dealResp.result) {
    return Response.json(
      { step: "deal.add", error: dealResp },
      { status: 400 }
    );
  }

  return Response.json({
    dealId: dealResp.result,
    contactId,
    companyId: companyId || null,
  });
}
