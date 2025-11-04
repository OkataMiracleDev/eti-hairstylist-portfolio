import { ala } from "@/app/font";
import React from "react";

const Contact = () => {
  return (
    <div data-aos="fade-up" id="contact" className="mt-20">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-xl md:text-3xl lg:text-5xl lg:text-center font-bold text-gray-900">
          Contact
        </h1>

        <form className="w-full lg:w-2/3">
          <div>
            <div className="mt-12 md:mt-15 lg:mt-20">
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Name"
                className="block w-full rounded-md border-b-2 border-gray-300 shadow-md p-2 focus:outline-stone-800"
              />
            </div>
            <div className="mt-12 md:mt-15 lg:mt-20">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                className="block w-full rounded-md border-b-2 border-gray-300 shadow-md p-2 focus:outline-stone-800"
              />
            </div>
            <div className="mt-12 md:mt-15 lg:mt-20">
              <textarea
                name="message"
                id="message"
                autoComplete="message"
                placeholder="Message"
                className="block w-full rounded-md border-b-2 border-gray-300 shadow-md p-2 focus:outline-stone-800"
              />
            </div>
            <div className="mt-10 w-full flex justify-center">
              <button
                type="submit"
                className={`${ala.className} rounded-md bg-stone-800 text-purple-200 hover:text-purple-300 hover:bg-stone-600 active-px-20 hover:px-20 px-10 py-2 transition-all duration-500`}
              >
                <p className="text-base lg:text-lg ">Send</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
