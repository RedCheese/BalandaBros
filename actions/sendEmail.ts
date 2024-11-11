"use server";

import React from "react";
import { Resend } from "resend";
import {
  getErrorMessage,
  validateString,
  validateNumber,
} from "@/app/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const senderAddress = formData.get("senderAddress");
  const subject = formData.get("subject");
  const message = formData.get("message");

  //simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }

  if (!validateString(subject, 500)) {
    return {
      error: "invalid subject",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["matthewrobertbalanda@gmail.com"],
      subject: subject as string,
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderName: senderName as string,
        senderEmail: senderEmail as string,
        senderAddress: senderAddress as string,
        subject: subject as string,
      }),
      //Same as this in tsx file
      //react: <ContactFormEmail message={message} senderEmail={senderEmail}/>,
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
