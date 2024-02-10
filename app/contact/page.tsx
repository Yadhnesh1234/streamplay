import React from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });

const AboutPage = () => {
  return (
    <section className={`${outfit.className} bg-[url('/images/hero-bg.jpg')]`}>
      <div className={` bg-[#060435e9]`}>
        <div className="font-inter container flex h-screen max-w-screen-2xl items-center justify-center py-14">
          <div className="md:w-1/2">
            <h1 className="my-2 text-5xl leading-relaxed text-gray-200">
              <span className="text-sky-300 hover:text-cyan-300">Contact Us</span>{" "}
            </h1>
           <div>
           <form>
                <div className="-mx-4 flex flex-wrap mt-20">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Organisation Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your organisation name"
                        className="border-stroke text-body-color-dark shadow-two w-full rounded-lg border  px-6 py-3 text-base  outline-none bg-transparent focus:border-primary focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Organisation Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke text-body-color-dark shadow-two w-full rounded-lg border  px-6 py-3 text-base  outline-none bg-transparent focus:border-primary focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-mediumtext-white"
                      >
                        Organisation Description
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter Description"
                        className="border-stroke text-body-color-dark shadow-two w-full rounded-lg border  px-6 py-3 text-base  outline-none bg-transparent focus:border-primary focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className=" shadow-submit-dark rounded-lg bg-primary px-6 py-2 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
