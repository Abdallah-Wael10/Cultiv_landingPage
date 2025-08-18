import React from "react";
import toast from "react-hot-toast";
import Loading from "../loading/loading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "الاسم الأول قصير جداً")
    .max(32, "الاسم الأول طويل جداً")
    .required("الاسم الأول مطلوب"),
  lastName: Yup.string()
    .min(2, "الاسم الأخير قصير جداً")
    .max(32, "الاسم الأخير طويل جداً")
    .required("الاسم الأخير مطلوب"),
  phone: Yup.string()
    .matches(/^01[0-9]{9}$/, "رقم الهاتف غير صحيح")
    .required("رقم الهاتف مطلوب"),
  company: Yup.string()
    .min(2, "اسم الشركة قصير جداً")
    .max(64, "اسم الشركة طويل جداً")
    .required("اسم الشركة مطلوب"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  company: "",
  email: "",
};

const FormComponent = () => {
  return (
    <div
      id="form"
      className="w-full min-h-screen py-8 sm:py-12 flex flex-col justify-center items-center bg-[#181818] px-4 sm:px-6 lg:px-8"
    >
      {/* Title Section */}
      <div className="w-full max-w-7xl mb-8 sm:mb-12">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-bold tracking-wide drop-shadow-2xl leading-tight">
          جرّب البوت الحين
        </h1>
        <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-[#FFC400] to-transparent mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </div>

      <div className="w-full max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden min-[901px]:flex justify-center items-start gap-12 px-6">
          <div className="w-full max-w-lg flex-1">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                try {
                  const res = await fetch("/api/FormToBitrix", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                  });
                  const data = await res.json();
                  if (res.ok && data.dealId) {
                    toast.success(
                      "تم إرسال رسالتك بنجاح! سنتواصل معك في أسرع وقت."
                    );
                    resetForm();
                  } else {
                    toast.error(
                      data?.error?.error_description ||
                        "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى."
                    );
                  }
                } catch {
                  toast.error("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  className="w-full max-w-lg flex-1 bg-[#353535] rounded-none p-10 space-y-8 shadow-2xl shadow-black/30 border border-gray-600/20 backdrop-blur-sm"
                  dir="rtl"
                >
                  <div className="flex gap-6">
                    <div className="flex-1 group">
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="الاسم الأخير"
                        className="w-full h-[68px] rounded-none bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                        focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                        transition-all duration-300 ease-out hover:border-gray-500/60"
                        dir="rtl"
                      />
                      <ErrorMessage name="lastName">
                        {(msg) => (
                          <div className="text-red-400 text-sm mt-2 text-right">
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex-1 group">
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="الاسم الأول"
                        className="w-full h-[68px] rounded-none bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                        focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                        transition-all duration-300 ease-out hover:border-gray-500/60"
                        dir="rtl"
                      />
                      <ErrorMessage name="firstName">
                        {(msg) => (
                          <div className="text-red-400 text-sm mt-2 text-right">
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="group">
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="رقم الهاتف"
                      className="w-full h-[68px] rounded-none bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="phone">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="group">
                    <Field
                      name="company"
                      type="text"
                      placeholder="اسم الشركة"
                      className="w-full h-[68px] rounded-none bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="company">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="group">
                    <Field
                      name="email"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full h-[68px] rounded-none bg-[#353535] border border-gray-600/40 px-6 text-white text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[68px] rounded-none bg-gradient-to-r from-[#FFC400] to-[#ffb800] 
                    text-white text-[24px] font-bold tracking-wide
                    hover:from-[#ffb800] hover:to-[#FFC400] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFC400]/30
                    active:scale-[0.98] transition-all duration-300 ease-out
                    shadow-lg shadow-[#FFC400]/20 border border-[#FFC400]/30"
                  >
                    {isSubmitting ? "جاري الإرسال..." : "ارسال الطلب"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Text Section */}
          <div className="w-full max-w-2xl flex-1 flex flex-col justify-center items-center">
            <div className="w-full text-right pt-[190px]" dir="rtl">
              <h2 className="text-[#FFC400] text-[48px] font-bold leading-tight tracking-wide drop-shadow-xl mb-8">
                <span className="text-white">مستعد</span> لأتمتة التوظيف؟
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Layout (0-900px) */}
        <div className="min-[901px]:hidden flex flex-col gap-8 sm:gap-10">
          {/* Text Section - Mobile First */}
          <div className="w-full flex flex-col justify-center items-center px-4">
            <div className="w-full text-center" dir="rtl">
              <h2 className="text-[#FFC400] text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-wide drop-shadow-xl mb-4 sm:mb-6">
                <span className="text-white">مستعد</span> لأتمتة التوظيف؟
              </h2>
            </div>
          </div>

          {/* Form Section - Mobile */}
          <div className="w-full flex justify-center items-center px-4">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                try {
                  const res = await fetch("/api/FormToBitrix", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                  });
                  const data = await res.json();
                  if (res.ok && data.dealId) {
                    toast.success(
                      "تم إرسال رسالتك بنجاح! سنتواصل معك في أسرع وقت."
                    );
                    resetForm();
                  } else {
                    toast.error(
                      data?.error?.error_description ||
                        "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى."
                    );
                  }
                } catch {
                  toast.error("حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.");
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="w-full max-w-lg bg-[#353535] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 shadow-2xl shadow-black/30 border border-gray-600/20 backdrop-blur-sm">
                  {/* Names */}
                  <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
                    <div className="flex-1 group">
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="الاسم الأول"
                        className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                        focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                        transition-all duration-300 ease-out hover:border-gray-500/60"
                        dir="rtl"
                      />
                      <ErrorMessage name="firstName">
                        {(msg) => (
                          <div className="text-red-400 text-sm mt-2 text-right">
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="flex-1 group">
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="الاسم الأخير"
                        className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                        focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                        transition-all duration-300 ease-out hover:border-gray-500/60"
                        dir="rtl"
                      />
                      <ErrorMessage name="lastName">
                        {(msg) => (
                          <div className="text-red-400 text-sm mt-2 text-right">
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="group">
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="رقم الهاتف"
                      className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="phone">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* Company */}
                  <div className="group">
                    <Field
                      name="company"
                      type="text"
                      placeholder="اسم الشركة"
                      className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="company">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* Email */}
                  <div className="group">
                    <Field
                      name="email"
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full h-12 sm:h-14 md:h-[68px] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#353535] border border-gray-600/40 px-4 sm:px-6 text-white text-sm sm:text-base md:text-[18px] font-medium placeholder-gray-400 outline-none
                      focus:border-[#FFC400] focus:bg-gray-800/70 focus:shadow-lg focus:shadow-[#FFC400]/20 
                      transition-all duration-300 ease-out hover:border-gray-500/60"
                      dir="rtl"
                    />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="text-red-400 text-sm mt-2 text-right">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 sm:h-14 md:h-[68px]   bg-gradient-to-r from-[#FFC400] to-[#ffb800] 
                    text-white text-lg sm:text-xl md:text-[24px] font-bold tracking-wide
                    hover:from-[#ffb800] hover:to-[#FFC400] hover:scale-[1.02] hover:shadow-xl hover:shadow-[#FFC400]/30
                    active:scale-[0.98] transition-all duration-300 ease-out
                    shadow-lg shadow-[#FFC400]/20 border border-[#FFC400]/30"
                  >
                    {isSubmitting ? "جاري الإرسال..." : "ارسال الطلب"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
