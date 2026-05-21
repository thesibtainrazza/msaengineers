"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";

export default function ContactDetailsSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f3f3f1] py-24 md:py-32">
      <div className="container-primary">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-24">
          {/* LEFT SIDE */}
          <div>
            {/* TITLE */}
            <div className="mb-14">
              <h3 className="text-[2.1rem] md:text-[2.4rem] font-[420] tracking-[-0.05em] leading-[1] text-primary">
                Start a project with us
              </h3>
            </div>

            {/* FORM */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-[58px] w-full border border-border-dark bg-transparent px-5 text-[1rem] text-text-dark outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-[58px] w-full border border-border-dark bg-transparent px-5 text-[1rem] text-text-dark outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[58px] w-full border border-border-dark bg-transparent px-5 text-[1rem] text-text-dark outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-4 block text-[1rem] text-[#3f3f3f]">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[58px] w-full border border-border-dark bg-transparent px-5 text-[1rem] text-text-dark outline-none transition-all duration-300 focus:border-primary"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-4 block text-[1rem] text-[#3f3f3f]">Message (optional)</label>
                <textarea
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-border-dark bg-transparent px-5 py-5 text-[1rem] text-text-dark outline-none transition-all duration-300 focus:border-primary"
                />
              </div>

              {/* STATUS MESSAGES */}
              {status === "success" && (
                <div className="text-green-600 bg-green-50 p-4 rounded-md">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-primary bg-red-50 p-4 rounded-md">
                  {errorMessage}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-4 inline-flex items-center gap-3 rounded-full border border-primary px-9 py-[18px] text-[1.05rem] font-medium tracking-[-0.02em] text-text-dark transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send"}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* DIVIDER */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-[#d6d6d6] lg:block" />

            <div className="space-y-20 lg:pl-20">

              {/* TOP BUTTONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">

                {/* CONTACT */}
                <div>

                  <h3
                    className="
                      mb-7
                      text-[3rem]
                      font-[420]
                      tracking-[-0.06em]
                      leading-none
                      text-text-dark
                    "
                  >
                    Contact
                  </h3>

                  <a
                    href={`mailto:${siteConfig.emails.support}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-primary
                      px-9
                      py-[18px]
                      text-[1.05rem]
                      font-medium
                      tracking-[-0.02em]
                      text-text-dark
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                    "
                  >

                    Email Us

                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                        fill="currentColor"
                      />
                    </svg>

                  </a>

                </div>

                {/* CAREERS */}
                <div>

                  <h3
                    className="
                      mb-7
                      text-[3rem]
                      font-[420]
                      tracking-[-0.06em]
                      leading-none
                      text-text-dark
                    "
                  >
                    Careers
                  </h3>

                  <a
                    href="/careers"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-primary
                      px-9
                      py-[18px]
                      text-[1.05rem]
                      font-medium
                      tracking-[-0.02em]
                      text-text-dark
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-white
                    "
                  >

                    Learn More

                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                        fill="currentColor"
                      />
                    </svg>

                  </a>

                </div>

              </div>

              {/* SUBCONTRACTORS */}
              <div>

                <h3
                  className="
                    mb-7
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-text-dark
                  "
                >
                  Services
                </h3>

                <a
                  href="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-primary
                    px-9
                    py-[18px]
                    text-[1.05rem]
                    font-medium
                    tracking-[-0.02em]
                    text-text-dark
                    transition-all
                    duration-300
                    hover:bg-primary
                    hover:text-white
                  "
                >

                  View Here

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M0 8.25H12.127L6.43075 13.9463L7.5 15L15 7.5L7.5 0L6.43075 1.05375L12.127 6.75H0V8.25Z"
                      fill="currentColor"
                    />
                  </svg>

                </a>

              </div>

              {/* CALL US */}
              <div>

                <h3
                  className="
                    mb-8
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-text-dark
                  "
                >
                  Call Us
                </h3>

                <div className="space-y-10">

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-primary">
                      Odisha Region
                    </h4>

                    <a
                      href="tel:+919876543210"
                      className="
                        text-[1.9rem]
                        font-light
                        tracking-[-0.04em]
                        text-text-dark
                        transition-colors
                        duration-300
                        hover:text-primary
                      "
                    >
                      +91 70082 75002
                    </a>

                  </div>

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-primary">
                      Project Office
                    </h4>

                    <a
                      href="tel:+919123456789"
                      className="
                        text-[1.9rem]
                        font-light
                        tracking-[-0.04em]
                        text-text-dark
                        transition-colors
                        duration-300
                        hover:text-primary
                      "
                    >
                      +91 94394 29092
                    </a>

                  </div>

                </div>

              </div>

              {/* FIND US */}
              <div>

                <h3
                  className="
                    mb-8
                    text-[3rem]
                    font-[420]
                    tracking-[-0.06em]
                    leading-none
                    text-text-dark
                  "
                >
                  Find Us
                </h3>

                <div className="space-y-12">

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-primary">
                      Rajgangpur, Odisha
                    </h4>

                    <p
                      className="
                        text-[1.45rem]
                        leading-[1.6]
                        tracking-[-0.03em]
                        text-text-dark
                      "
                    >
                      Main Industrial Office
                      <br />
                      Rajgangpur, Odisha
                    </p>

                  </div>

                  <div>

                    <h4 className="mb-2 text-[1.7rem] text-primary">
                      Project Sites
                    </h4>

                    <p
                      className="
                        text-[1.45rem]
                        leading-[1.6]
                        tracking-[-0.03em]
                        text-text-dark
                      "
                    >
                      Cement Plants & Industrial
                      <br />
                      Execution Locations Across India
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}