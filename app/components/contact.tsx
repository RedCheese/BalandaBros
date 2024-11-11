"use client";
import React from "react";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  return (
    <section
      className="flex justify-center items-center flex-col gap-8"
      id="contact"
    >
      <h2 className="font-bold text-3xl text-red-500">Contact</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 mt-10 text-lg">
          <div>
            <p className="text-2xl">Address</p>
            <p>Rua do Salvador Velha, 16</p>
            <p>Évora</p>
            <p>7000-877</p>
          </div>
          <div>
            <p className="text-2xl">Email</p>
            <p>nicholasmbalanda@gmail.com</p>
            <p>matthewrobertbalanda@gmail.com</p>
          </div>
          <div>
            <p className="text-2xl">Mobile</p>
            <p>{"Tel(+351)932 223 588"}</p>
            <p>{"Tel(+351)321 501 802"}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-2xl">Linkedin</p>
            <a
              href=""
              className="flex-initial w-fit bold text-blue-700 hover:text-blue-900 hover:text-xl"
              target="_blank"
            >
              Nicholas
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-balanda-690a7ba1/"
              className="flex-initial w-fit bold text-blue-700 hover:text-blue-900 hover:text-xl"
              target="_blank"
            >
              Matthew
            </a>
          </div>
        </div>
        <div className="w-[560px]">
          <form
            className="mt-10 flex flex-col items-center"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully");
            }}
          >
            <input
              className="h-10 w-[90%] mb-6 border-b-2 border-b-black p-4"
              type="text"
              placeholder="Name"
              required
              maxLength={500}
              name="senderName"
            />
            <input
              className="h-10 w-[90%] mb-6 border-b-2 border-b-black p-4"
              type="email"
              placeholder="Email"
              required
              maxLength={500}
              name="senderEmail"
            />
            <input
              className="h-10 w-[90%] mb-6 border-b-2 border-b-black p-4"
              type="text"
              placeholder="Address"
              name="senderAddress"
              maxLength={500}
            />
            <input
              className="h-10 w-[90%] mb-6 border-b-2 border-b-black p-4"
              type="text"
              placeholder="Subject matter"
              required
              maxLength={500}
              name="subject"
            />
            <textarea
              className="h-32 w-[90%] mb-6 border-b-2 border-b-black p-4"
              placeholder="Message"
              required
              maxLength={500}
              name="message"
            />
            <SubmitBtn />
          </form>
        </div>
      </div>
    </section>
  );
}
