const benefits = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="24" cy="16" r="10" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M4 48c0-11 9-18 20-18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="44" cy="36" r="12" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M38 36l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 20v4M44 48v4M30 36h4M54 36h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="44" cy="36" r="3" fill="white"/>
      </svg>
    ),
    title: "Enhanced Project Prioritization & Alignment",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M8 52V20l14-8 14 8 14-8v32l-14 8-14-8-14 8z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M22 12v32M36 20v32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="6" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M29 32l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Improved Decision Making & Visibility",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="22" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="42" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M6 52c0-9 7-15 16-15M42 37c9 0 16 6 16 15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M28 40c-4 0-6 3-6 8M36 40c4 0 6 3 6 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="36" r="5" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M24 56h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M56 44l4-4M56 52h4M52 56l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Resource Optimization & Capacity Planning",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 20l6 6M38 38l6 6M44 20l-6 6M20 44l6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="6" fill="white"/>
        <path d="M32 26v6l4 4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Adaptability to Agile & Hybrid Methodologies",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="28" cy="32" r="16" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M28 22v2M28 40v2M22 32h2M32 32h2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 26c-3 0-5 2-5 4s2 4 5 4 5 2 5 4-2 4-5 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 22v4M28 38v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <rect x="40" y="36" width="18" height="20" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M40 44h18M44 44v12M54 44v12M49 36v-4a4 4 0 018 0v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Cost Control & Budget Management",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="44" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M8 50c0-8 5-14 12-14M44 36c7 0 12 6 12 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 42c0-4 4-6 8-6s8 2 8 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="34" r="4" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M26 56l6-4 6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 50h4M48 50h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Enhanced Collaboration & Communication",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M32 8L8 20v14c0 13 10 24 24 26 14-2 24-13 24-26V20L32 8z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
        <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M46 46l8 8M42 56l6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="50" cy="52" r="1.5" fill="white"/>
      </svg>
    ),
    title: "Risk Mitigation & Issue Management",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M32 20v12l8 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 8l8-4M44 8l4 8M20 8l-8-4M20 8l-4 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 12v-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Faster Time-to-Market & Delivery",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="20" width="48" height="36" rx="3" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M8 30h48" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 20v-6a12 12 0 0124 0v6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="32" cy="43" r="5" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M32 38v-4M32 48v4M27 43h-4M37 43h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="43" r="2" fill="white"/>
      </svg>
    ),
    title: "Strategic Portfolio Optimization",
  },
];

export default function PPMBenefits() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transformative Benefits of{" "}
            <span className="text-[#e02b20]">Implementing PPM</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Implementing modern Project and Portfolio Management (PPM) practices
            can yield several transformative benefits for organizations. Here are
            some key advantages
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon */}
              <div className="mb-2">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold leading-snug">
                {benefit.title}
              </h3>

              {/* Divider — white line with red accent */}
              <div className="flex items-center gap-1">
                <div className="w-16 h-px bg-white"></div>
                <div className="w-4 h-px bg-[#e02b20]"></div>
              </div>

              {/* View More */}
              <a
                href="#"
                className="text-[#e02b20] text-sm font-medium hover:opacity-75 transition-opacity w-fit"
              >
                View More
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}