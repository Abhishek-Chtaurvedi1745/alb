const CommonBanner = ({
  image,
  title,
  highlight
}) => {
  return (
    <section className="relative h-[300px] md:h-[450px] overflow-hidden mt-20">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />


      {/* Left Heavy Overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-r
        from-black/90
        via-black/60
        to-transparent
      "></div>


      {/* Content */}
      <div className="
        absolute inset-0
        flex
        items-center
        px-6
        md:px-16
      ">

        <h1 className="
          text-white 
          text-3xl 
          md:text-[40px]
          font-semibold
          max-w-3xl
        ">

          {title}{" "}

          <span className="text-[#FF403A]">
            {highlight}
          </span>

        </h1>

      </div>

    </section>
  );
};


export default CommonBanner;