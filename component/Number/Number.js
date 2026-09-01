import React from 'react'

const stats = [
  {
    number: "30+",
    title: "Happy Customers",
  },
  {
    number: "100+",
    title: "Projects Delivered",
  },
  {
    number: "25+",
    title: "Subject Matter Experts",
  },
  {
    number: "8+",
    title: "Years in Business",
  },
];


function Number() {
  return (
    <div><section className="bg-black py-16 px-4">
  <div className="max-w-7xl mx-auto">

   <div
  className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl   p-8 relative"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/ddcx08e0s/image/upload/v1788262768/albatroz/alc.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {stats.map((item, index) => (
    <div
      key={index}
      className={`text-center ${
        index !== stats.length - 1
          ? ""
          : ""
      }`}
    >
      <h2 className="text-[40px] lg:text-[69px] font-bold text-white">
        {item.number}
      </h2>

      <p className="text-[#ABB8C3] mt-0 lg:-mt-4  text-[13px] lg:text-[17px]">
        {item.title}
      </p>
    </div>
  ))}
</div>
  </div>
</section></div>
  )
}

export default Number