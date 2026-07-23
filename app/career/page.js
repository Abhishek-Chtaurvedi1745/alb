import React from 'react'
import Number from "@/component/Number/Number"
import CareerTestimonials from '../../section/Career/CareerTestimonials'
import CommonBanner from '../../component/common/Banner'



function page() {
  return (
    <div>
      <CommonBanner
  image="/images/crr.png"
  title="Career"
  highlight=""
/>
        
    <section className="w-full py-10 bg-black">
  <div className="max-w-5xl mx-auto px-4 text-center">

    <h3 className="text-3xl md:text-[45px] font-semibold text-white">
      Join Our <span className='text-[#FF403A]'> Team! </span>
    </h3>

    <p className="font-normal text-[13px] md:text-[16px] leading-8 text-[#FFFFFF]">
     Come join our vibrant professional services team if you have a niche for consulting & enjoy working closely with
customers in solving their business problems.
    </p>

    {/* PARAGRAPH 2 */}
    <p className="font-normal mt-4 text-[13px] md:text-[16px] leading-8 text-[#FFFFFF]">
      Albatroz's truly flexible work culture, challenging opportunities to learn & grow in a startup environment is what
we are known for. If this resonates with you, hit us with your resume for the openings listed.
    </p>

  </div>
</section>
<section className="w-full py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4">

    <div className="border border-gray-700 rounded-[30px] p-8 md:p-12 flex flex-col gap-8">

      <h3 className="text-[38px] md:text-[45px] font-semibold text-white ">
        Current Vacancies
      </h3>

       <button className="w-fit px-10 py-2 rounded-full border border-[#FFFFFF] text-[#FFFFFF] text-[18px] font-medium cursor-pointer">
        Position
      </button>

      <div className="flex flex-col gap-5">

        <div className="flex items-start gap-4">
          <span className="w-[30px] h-[30px] rounded-full border border-[#FF403A] text-white flex items-center justify-center font-semibold">
            1
          </span>

          <p className="font-normal text-[#FFFFFF] text-[13px] leading-8">
            Clarity PPM Consultant
          </p>
        </div>
      </div>
      <button className="w-fit px-8 py-3 rounded-full bg-[#FF403A] text-white text-[18px] font-medium hover:scale-105 duration-300 cursor-pointer">
        VIEW JOB/APPLY
      </button>
    </div>
  </div>
</section>
<CareerTestimonials />
    </div>
  )
}

export default page