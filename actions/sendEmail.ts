"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "E-mail de l'expéditeur invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact de <onboarding@resend.dev>",
      to: "contact@anthony-hohn.com",
      subject: "Message du formulaire de contact",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};