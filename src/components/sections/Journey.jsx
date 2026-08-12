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
        w-full
        min-w-0
        overflow-hidden
        bg-black
        px-6
        py-24
        sm:px-8
        sm:py-28
        md:px-12
        md:py-32
        lg:px-16
        lg:py-36
      "
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <ScrollReveal>
          <div className="mb-20 max-w-4xl sm:mb-24">
            {/* Section Label */}

            <p
              className="
                flex
                items-center
                gap-3
                text-[10px]
                font-semibold
                tracking-[0.3em]
                text-[#A62C2C]
                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              <span className="h-px w-6 shrink-0 bg-[#A62C2C] sm:w-8" />

              <span>JOURNEY / THE ROAD SO FAR</span>
            </p>

            {/* Heading */}

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.04em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              THE ROAD
              <br />
              <span className="text-amber-400">SO FAR.</span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              Every experience became another mile. Every problem taught me
              something new. This is the road that shaped how I build.
            </p>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* TIMELINE */}
        {/* ================================================= */}

        <div className="relative min-w-0">
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

          {/* Timeline Items */}

          <div className="space-y-20 sm:space-y-24 md:space-y-28">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={item.year}
                  delay={index * 120}
                  direction={isEven ? "left" : "right"}
                >
                  <article className="group relative min-w-0 md:grid md:grid-cols-2 md:gap-16">
                    {/* ================================================= */}
                    {/* TIMELINE POINT */}
                    {/* ================================================= */}

                    <span
                      className="
                        absolute
                        left-0
                        top-1
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

                    {/* ================================================= */}
                    {/* DESKTOP LEFT / YEAR */}
                    {/* ================================================= */}

                    <div
                      className={`
                        min-w-0
                        pl-10
                        md:pl-0
                        ${
                          isEven
                            ? "md:col-start-1 md:text-right"
                            : "md:col-start-2 md:row-start-1 md:text-left"
                        }
                      `}
                    >
                      <span
                        className="
                          font-mono
                          text-4xl
                          font-bold
                          tracking-[-0.05em]
                          text-zinc-800
                          transition-colors
                          duration-500
                          group-hover:text-[#A62C2C]
                          sm:text-5xl
                          md:text-6xl
                        "
                      >
                        {item.year}
                      </span>

                      {/* Desktop Line */}

                      <div
                        className={`
                          mt-4
                          hidden
                          md:flex
                          ${isEven ? "justify-end" : "justify-start"}
                        `}
                      >
                        <span
                          className="
                            h-px
                            w-16
                            bg-zinc-900
                            transition-all
                            duration-500
                            group-hover:w-24
                            group-hover:bg-[#A62C2C]
                          "
                        />
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* CONTENT */}
                    {/* ================================================= */}

                    <div
                      className={`
                        relative
                        mt-8
                        min-w-0
                        pl-10
                        md:mt-0
                        md:row-start-1
                        md:pl-0
                        ${
                          isEven
                            ? "md:col-start-2"
                            : "md:col-start-1 md:text-right"
                        }
                      `}
                    >
                      {/* Mobile Indicator */}

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

                      {/* Mile Label */}

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          tracking-[0.3em]
                          text-[#A62C2C]
                          sm:text-xs
                        "
                      >
                        {String(index + 1).padStart(2, "0")} / MILE
                      </p>

                      {/* Title */}

                      <h3
                        className="
                          mt-3
                          break-words
                          text-2xl
                          font-black
                          leading-tight
                          tracking-[-0.02em]
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-amber-400
                          sm:text-3xl
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          mt-5
                          max-w-xl
                          text-sm
                          leading-7
                          text-gray-500
                          transition-colors
                          duration-300
                          group-hover:text-gray-400
                          sm:text-base
                          sm:leading-8
                        "
                      >
                        {item.description}
                      </p>

                      {/* Mile Indicator */}

                      <div
                        className={`
                          mt-7
                          flex
                          items-center
                          gap-3
                          ${isEven ? "md:justify-start" : "md:justify-end"}
                        `}
                      >
                        <span
                          className="
                            h-px
                            w-8
                            bg-zinc-800
                            transition-all
                            duration-500
                            group-hover:w-14
                            group-hover:bg-[#A62C2C]
                          "
                        />

                        <span
                          className="
                            font-mono
                            text-[9px]
                            tracking-[0.2em]
                            text-zinc-700
                            sm:text-[10px]
                          "
                        >
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

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <ScrollReveal delay={300}>
          <div
            className="
              mt-24
              border-t
              border-zinc-800
              pt-8
              sm:mt-28
              sm:pt-10
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.3em]
                  text-gray-600
                  sm:text-xs
                "
              >
                THE JOURNEY CONTINUES
              </span>

              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.2em]
                  text-[#A62C2C]
                  transition-colors
                  duration-300
                  hover:text-amber-400
                  sm:text-xs
                "
              >
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
