import { ala } from "@/app/font";
import React from "react";

const Contact = () => {
  return (
    <div data-aos="fade-up" id="contact" className="mt-20">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
          Contact
        </h1>

        <form className="w-full lg:w-2/3 mt-10">
          <div className="bg-gray-100/70 backdrop-blur rounded-xl border border-gray-300 shadow-xl hover:relative hover:bottom-2 active:relative active:bottom-2 hover:shadow-2xl active:shadow-2xl p-6 md:p-8 transition-all ease-in-out duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                  className="mt-2 block w-full rounded-md bg-white/80 border border-gray-300 shadow-sm p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-700"
                  aria-label="Full Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                  className="mt-2 block w-full rounded-md bg-white/80 border border-gray-300 shadow-sm p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-700"
                  aria-label="Email"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                placeholder="Tell me about the look you want..."
                rows={5}
                required
                className="mt-2 block w-full rounded-md bg-white/80 border border-gray-300 shadow-sm p-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-700"
                aria-label="Message"
              />
            </div>

            <div className="mt-8 w-full flex justify-center">
              <button
                type="submit"
                className={`${ala.className} inline-flex items-center rounded-md bg-stone-800 text-purple-100 hover:text-purple-200 active:text-purple-200 hover:bg-stone-700 active:bg-stone-700 px-8 hover:px-20 active:px-20 py-3 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-stone-700`}
                aria-label="Send message"
              >
                <span className="text-base md:text-lg font-semibold">Send</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
