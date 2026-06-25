const fadeConfig = {
  right: {
    mask: "[mask-image:linear-gradient(to_right,black_50%,rgba(0,0,0,0.92)_72%,transparent_100%)]",
    overlays: (
      <>
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-black via-black/70 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent sm:w-14" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-20" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black via-black/60 to-transparent sm:h-20" />
      </>
    ),
  },
  left: {
    mask: "[mask-image:linear-gradient(to_left,black_50%,rgba(0,0,0,0.92)_72%,transparent_100%)]",
    overlays: (
      <>
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent sm:w-14" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-20" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black via-black/60 to-transparent sm:h-20" />
      </>
    ),
  },
  all: {
    mask: "[mask-image:radial-gradient(ellipse_at_center,black_42%,rgba(0,0,0,0.95)_72%,transparent_100%)]",
    overlays: (
      <>
        <div className="absolute inset-y-0 left-0 w-[32%] bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-black via-black/75 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black via-black/80 to-transparent sm:h-24" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent sm:h-24" />
      </>
    ),
  },
};

export default function BlendedSectionImage({
  src,
  alt = "",
  fade = "right",
  className = "",
  animate = false,
}) {
  const config = fadeConfig[fade] ?? fadeConfig.right;

  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-[#ff403a]/10 blur-3xl" />

      <img
        src={src}
        alt={alt}
        className={`relative z-10 w-full object-cover object-center [-webkit-mask-size:100%_100%] [mask-size:100%_100%] [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat] ${config.mask} ${
          animate ? "animate-float" : ""
        } ${className}`}
      />

      <div className="pointer-events-none absolute inset-0 z-20">{config.overlays}</div>
    </div>
  );
}
