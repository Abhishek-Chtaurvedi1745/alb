import React from 'react'
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

function page() {
  return (
    <div>
         <section className="bg-black py-10 px-4">
       <h2 className='text-[45px] py-5 text-center font-semibold text-[#ffffff]'>Contact <span className='text-[#ff403a]'>Us</span></h2>
      <div className="max-w-6xl mx-auto relative">
        <div className="bg-[#2f2d2d] rounded-3xl p-8 md:p-12 lg:w-[58%] xl:w-[78%] shadow-2xl">
          <h2 className="text-[35px] font-semibold text-white mb-4">
            Let's Start the{" "}
            <span className="text-[#ff403a]">Conversation</span>
          </h2>
          <p className="text-[#FFFFFF] font-regular text-[20px] max-w-2xl mb-10">
            Share your requirements with us and our team will get back to you
            with the right solution for your business needs.
          </p>

          <form>
            <div className="grid md:grid-cols-2 max-w-2xl gap-6">
              <input
                type="text"
                placeholder="Full Name*"
                className="bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Last Name*"
                className="bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Business Email*"
                className="bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none"
              />
              <div className="relative">
                <select
                  defaultValue="India"
                  className="w-full bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white appearance-none outline-none"
                >
                  <option value="India" className="text-black">
                    India
                  </option>
                  <option value="USA" className="text-black">
                    USA
                  </option>
                  <option value="UK" className="text-black">
                    UK
                  </option>
                </select>

                <ChevronRight
                  size={22}
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white"
                />
              </div>

              <input
                type="text"
                placeholder="Organization*"
                className="bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none"
              />
            </div>

           <textarea
          rows="5"
          placeholder="Message"
          className="max-w-2xl w-full mt-6 bg-transparent border border-gray-400 rounded-3xl px-8 py-5 text-white outline-none resize-none"
        ></textarea>

            <button
              type="submit"
              className="mt-8 bg-[#ff403a] hover:bg-red-600 transition-all text-white font-bold text-2xl px-16 py-4 rounded-3xl"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Card */}
        <div className="lg:absolute lg:top-14 lg:right-0 bg-[#FF403A] rounded-3xl p-7 mt-8 lg:mt-0 lg:w-[420px] shadow-2xl">
          <h3 className="text-white text-[25px] font-semibold leading-tight mb-8">
            Hii We are always here
            <br />
            to help you.
          </h3>

          <div className="space-y-5">
            <div className="bg-[#CF2721] rounded-2xl p-4 flex items-center gap-4">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <img src="images/phn.svg" />
              </div>

              <div className="text-white font-medium text-xl">
                <div className="text-white font-medium text-xl">
  <a
    href="tel:+919384812035"
    className="block hover:underline"
  >
    +91 93848 12035
  </a>

  <a
    href="tel:+919384812036"
    className="block hover:underline"
  >
    +91 93848 12039
  </a>
</div>
              </div>
            </div>

            <div className="bg-[#d92020] rounded-2xl p-4 flex items-center gap-4">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                 <img src="images/msg.svg" />
              </div>

              <a
  href="mailto:info@albatrozsolutions.com"
  className="text-white text-xl hover:underline"
>
  info@albatrozsolutions.com
</a>
            </div>

            <div className="bg-[#d92020] rounded-2xl p-4 flex items-start gap-4">
              <div className="bg-white min-w-[56px] h-14 rounded-full flex items-center justify-center">
                 <img src="images/lc.svg" />
              </div>

              <p className="text-white text-lg leading-9">
                DC-43, Development Center,
                <br />
                4th Floor,
                <br />
                TIDEL Park, ELCOSEZ, Civil
                <br />
                Aerodrome Post,
                <br />
                Coimbatore, Tamil Nadu –
                <br />
                641014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page