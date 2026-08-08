import ScrollReveal from "../ui/ScrollReveal";

function Journey() {
  const journey = [
    {
      year: "2022",
      title: "STARTING LINE",
      description:
        "The beginning of my journey in Informatics Engineering. Learning the fundamentals of programming, systems, and problem solving.",
    },
    {
      year: "2023",
      title: "LEARNING THE CRAFT",
      description:
        "Started building more serious projects while learning how software, databases, and web technologies work together.",
    },
    {
      year: "2024",
      title: "BUILDING & LEADING",
      description:
        "Developed projects, became involved in organization, collaborated with others, and learned that building something meaningful is rarely a solo journey.",
    },
    {
      year: "2025",
      title: "FORGED IN CODE",
      description:
        "Graduated from Informatics Engineering and began turning academic experience and personal projects into the foundation of a professional career.",
    },
  ];

  return (
    <section
      id="journey"
      className="
        min-h-screen
        bg-black
        px-6
        py-32
        text-white
        md:px-10
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <ScrollReveal>
          <div className="mb-24">
            <p className="flex items-center gap-3 text-xs tracking-[0.4em] text-[#A62C2C]">
              <span className="h-px w-8 bg-[#A62C2C]" />
              JOURNEY / THE ROAD SO FAR
            </p>

            <h2 className="mt-6 text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl">
              THE ROAD
              <br />
              <span className="text-amber-400">SO FAR.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Every experience became another mile. Every problem taught me
              something new. This is the road that shaped how I build.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Vertical Road */}

          <div
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-px
              bg-zinc-800
              md:left-1/2
            "
          />

          <div className="space-y-20 md:space-y-24">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={item.year}
                  delay={index * 120}
                  direction={isEven ? "left" : "right"}
                >
                  <article
                    className={`
                      group
                      relative
                      grid
                      gap-8
                      md:grid-cols-2
                      md:gap-16
                      ${!isEven ? "md:[&>div:first-of-type]:order-2" : ""}
                    `}
                  >
                    {/* ================= TIMELINE POINT ================= */}

                    <span
                      className="
                        absolute
                        left-0
                        top-2
                        z-10
                        h-4
                        w-4
                        rounded-full
                        border-4
                        border-black
                        bg-[#A62C2C]
                        transition-all
                        duration-500
                        group-hover:scale-125
                        group-hover:bg-amber-400
                        group-hover:shadow-[0_0_20px_rgba(166,44,44,0.5)]
                        md:left-1/2
                        md:-translate-x-1/2
                      "
                    />

                    {/* ================= YEAR ================= */}

                    <div className="pl-10 md:pl-0 md:text-right">
                      <span
                        className="
                          font-mono
                          text-4xl
                          font-bold
                          text-zinc-800
                          transition-colors
                          duration-500
                          group-hover:text-[#A62C2C]
                          md:text-5xl
                        "
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* ================= CONTENT ================= */}

                    <div
                      className="
                        relative
                        pl-10
                        md:pl-0
                      "
                    >
                      {/* Small red indicator */}

                      <div
                        className="
                          absolute
                          left-0
                          top-1
                          h-5
                          w-px
                          bg-[#A62C2C]
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                          md:hidden
                        "
                      />

                      <p className="text-xs tracking-[0.3em] text-[#A62C2C]">
                        0{index + 1} / MILE
                      </p>

                      <h3
                        className="
                          mt-3
                          text-2xl
                          font-black
                          transition-colors
                          duration-300
                          group-hover:text-amber-400
                          md:text-3xl
                        "
                      >
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-xl leading-8 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                        {item.description}
                      </p>

                      {/* Mile indicator */}

                      <div className="mt-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-zinc-800 transition-all duration-500 group-hover:w-14 group-hover:bg-[#A62C2C]" />

                        <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
                          MILE {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* ================= CLOSING ================= */}

        <ScrollReveal delay={300}>
          <div className="mt-24 border-t border-zinc-800 pt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-sm tracking-[0.3em] text-gray-600">
                THE JOURNEY CONTINUES
              </span>

              <span className="font-mono text-sm text-[#A62C2C] transition-colors duration-300 hover:text-amber-400">
                KEEP RIDING →
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Journey;
