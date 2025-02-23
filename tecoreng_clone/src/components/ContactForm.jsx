import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import ReCAPTCHA from "react-google-recaptcha";

const validationSchema = Yup.object().shape({
  contactname: Yup.string()
    .required("Full Name is required")
    .min(2, "Full Name must be at least 2 characters"),
  phone: Yup.string()
    .required("Phone number is required")
    .test("is-valid-phone", "Invalid phone number format", (value) => {
      return !validatePhoneNumber(value);
    }),
  mail: Yup.string()
    .required("E-mail is required")
    .email("Invalid email format"),
  idea: Yup.string()
    .required("Please share your idea")
    .min(10, "Idea must be at least 10 characters"),
  file: Yup.mixed()
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      const supportedFormats = [
        "application/pdf",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "image/png",
        "image/jpeg",
        "application/zip",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "text/csv",
        "application/vnd.oasis.opendocument.text",
        "application/vnd.oasis.opendocument.spreadsheet",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];
      return value && supportedFormats.includes(value.type);
    }),
  recaptcha: Yup.string().required("Please verify reCAPTCHA"),
});

const validatePhoneNumber = (phone) => {
  const phoneNumber = parsePhoneNumberFromString(`+${phone}`);
  if (!phoneNumber || !phoneNumber.isValid()) {
    return "Invalid phone number";
  }
  return undefined;
};

function ContactForm() {
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const formik = useFormik({
    initialValues: {
      contactname: "",
      phone: "",
      mail: "",
      idea: "",
      file: "",
      recaptcha: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="p-6 lg:p-12 bg-white rounded-[40px]">
      <div className="text-[24px] lg:text-[32px] text-black">
        <h2 className="font-semibold leading-[21px] mb-5 text-4xl lg:text-6xl">
          Get in <span className="gradientText">touch</span>
        </h2>
        <p className="leading-[21px] text-[14px] lg:text-[16px] contactFont">
          We are always ready to help. There are many ways to contact us. You
          may drop us a line, give us a call, send an email.
        </p>
      </div>

      <form className="text-black" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="contactName"
          className="p-2.5 my-[5px] w-full bg-none resize-none border-b outline-none"
          {...formik.getFieldProps("contactname")}
        />
        {formik.touched.contactname && formik.errors.contactname && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.contactname}</p>
        )}
        <PhoneInput
          placeholder="Contact Number"
          country={"in"}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue("phone", phone)}
          containerClass="w-full bg-none resize-none border-b outline-none"
          inputStyle={{
            width: "100%",
            background: "none",
            border: "0px",
            outline: "none",
          }}
          dropdownClass="custom-dropdow"
          buttonStyle={{
            background: "none",
            border: "0px",
            outline: "none",
            display: "flex",
            textAlign:"center",
            alignItems: "center",
          }}
          dropdownStyle={{
            maxHeight: "300px",
          }}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
        )}

        <input
          type="email"
          placeholder="E-mail"
          name="mail"
          className="p-2.5 my-[5px] w-full bg-none resize-none border-b outline-none"
          {...formik.getFieldProps("mail")}
        />
        {formik.touched.mail && formik.errors.mail && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.mail}</p>
        )}
        <input
          type="text"
          placeholder="Let's talk about your idea"
          name="idea"
          className="p-2.5 my-[5px] w-full bg-none resize-none border-b outline-none"
          {...formik.getFieldProps("idea")}
        />
        {formik.touched.idea && formik.errors.idea && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.idea}</p>
        )}

        <label className="relative mt-8 mb-4 w-full p-12 border border-gray-500 border-dashed cursor-pointer text-center inline-flex flex-row items-center justify-center gap-2">
          <img
            src="/upload.svg"
            className="h-auto"
            width={21}
          />
          <span className="font-normal text-[12.0556px] tracking-[0.430556px] text-gray-600">
            Upload Additional file
          </span>
          <input
            type="file"
            className="hidden"
            accept=".pdf,.txt,.doc,.docx,.png,.jpg,.jpeg,.zip,.xls,.xlsl,.xlsx,.csv,.odt,.ods,.ppt,.pptx"
            name="file"
            onChange={(event) => formik.setFieldValue("file", event.currentTarget.files[0])}
          />
        </label>
        <div style={{ color: "#8E8E8E", fontSize: "12px", margin: "20px 0", cursor: "default" }}>
          File size of your document should not exceed 2MB.
        </div>

        <div>
          <ReCAPTCHA
            sitekey="6LfzGt4qAAAAAN6VhQc1w7YuptElQwhB_VJ6FvEE"
            onChange={(token) => {
              setRecaptchaToken(token);
              formik.setFieldValue("recaptcha", token);
            }}
          />
        </div>

        {formik.touched.recaptcha && formik.errors.recaptcha && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.recaptcha}</p>
        )}
        <div className="mt-4">
          <button className="pushable w-full" type="submit">
            <span className="front">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
