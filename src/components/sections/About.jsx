import ScrollReveal from "../ui/ScrollReveal";

function About() {
  const values = [
    {
      number: "01",
      title: "RESPONSIBILITY",
      description:
        "I believe that choosing a path also means taking responsibility for every step that comes with it.",
    },
    {
      number: "02",
      title: "CONSISTENCY",
      description:
        "Progress does not always look dramatic. I value showing up, learning, building, and improving consistently.",
    },
    {
      number: "03",
      title: "COLLABORATION",
      description:
        "The best things I experienced during university came from working with supportive people and learning from each other.",
    },
    {
      number: "04",
      title: "IMPACT",
      description:
        "I want the things I build to be useful — whether they solve a problem for others or help me grow personally.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-900
        bg-black
        px-6
        py-24
        text-white
        sm:px-8
        sm:py-28
        md:px-12
        md:py-32
        lg:px-16
        lg:py-40
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <ScrollReveal>
          <div className="mb-16 sm:mb-20">
            <p
              className="
                flex
                items-center
                gap-3
                text-xs
                font-semibold
                tracking-[0.35em]
                text-[#A62C2C]
                sm:tracking-[0.4em]
              "
            >
              <span className="h-px w-8 shrink-0 bg-[#A62C2C]" />
              ABOUT / THE RIDER
            </p>

            <h2
              className="
                mt-6
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              THE PERSON
              <br />
              <span className="text-amber-400">BEHIND THE CODE.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* INTRODUCTION */}
        {/* ================================================= */}

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* LEFT / MAIN STATEMENT */}

            <div>
              <p
                className="
                  max-w-xl
                  text-xl
                  font-semibold
                  leading-relaxed
                  sm:text-2xl
                  md:text-3xl
                "
              >
                I am a software developer who is still learning, still building,
                and still finding better ways to solve problems.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-[#A62C2C]" />

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.25em]
                    text-gray-600
                    sm:text-[10px]
                    sm:tracking-[0.3em]
                  "
                >
                  STILL BUILDING
                </span>
              </div>
            </div>

            {/* RIGHT / STORY */}

            <div
              className="
                space-y-6
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
              "
            >
              <p>
                My journey started with Informatics Engineering, where I learned
                the fundamentals of programming, systems, databases, and
                software development.
              </p>

              <p>
                Along the way, projects and organization taught me something
                that code alone could not: building something meaningful
                requires responsibility, collaboration, and the willingness to
                keep learning.
              </p>

              <p>
                Today, I am taking the next step toward a professional career in
                software development. I may still have a long road ahead, but I
                am ready to keep moving.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* DIVIDER */}
        {/* ================================================= */}

        <ScrollReveal delay={150}>
          <div className="my-20 h-px bg-zinc-900 sm:my-24" />
        </ScrollReveal>

        {/* ================================================= */}
        {/* VALUES */}
        {/* ================================================= */}

        <ScrollReveal delay={200}>
          <div>
            {/* Section Label */}

            <div className="mb-10 flex items-center gap-4 sm:mb-12">
              <span className="h-px w-10 bg-[#A62C2C] sm:w-12" />

              <p
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-gray-500
                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                WHAT I BRING
              </p>
            </div>

            {/* Value Grid */}

            <div
              className="
                grid
                grid-cols-1
                overflow-hidden
                border
                border-zinc-800
                bg-zinc-800
                md:grid-cols-2
              "
            >
              {values.map((value, index) => (
                <article
                  key={value.number}
                  className="
                    group
                    relative
                    min-w-0
                    bg-black
                    p-6
                    transition-all
                    duration-500
                    hover:bg-zinc-950
                    sm:p-8
                    md:p-10
                  "
                >
                  {/* Top Accent */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-[#A62C2C]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                  {/* Top */}

                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="
                        font-mono
                        text-sm
                        text-[#A62C2C]
                        transition-colors
                        duration-300
                        group-hover:text-amber-400
                      "
                    >
                      {value.number}
                    </span>

                    <span
                      className="
                        shrink-0
                        text-[9px]
                        tracking-[0.25em]
                        text-gray-700
                        sm:text-xs
                        sm:tracking-[0.3em]
                      "
                    >
                      VALUE
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-8
                      break-words
                      text-2xl
                      font-black
                      leading-tight
                      tracking-[-0.02em]
                      transition-colors
                      duration-300
                      group-hover:text-amber-400
                      sm:mt-10
                      sm:text-3xl
                    "
                  >
                    {value.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-7
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-gray-400
                      sm:text-base
                    "
                  >
                    {value.description}
                  </p>

                  {/* Bottom Indicator */}

                  <div className="mt-8 flex items-center gap-3">
                    <span
                      className="
                        h-px
                        w-6
                        bg-zinc-800
                        transition-all
                        duration-500
                        group-hover:w-12
                        group-hover:bg-[#A62C2C]
                      "
                    />

                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.15em]
                        text-zinc-700
                        sm:text-[10px]
                        sm:tracking-[0.2em]
                      "
                    >
                      {String(index + 1).padStart(2, "0")} / PRINCIPLE
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* PHILOSOPHY */}
        {/* ================================================= */}

        <ScrollReveal delay={300}>
          <div className="mt-20 border-y border-zinc-900 py-14 text-center sm:mt-24 sm:py-16">
            <p
              className="
                text-[10px]
                font-semibold
                tracking-[0.3em]
                text-[#A62C2C]
                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              PERSONAL PHILOSOPHY
            </p>

            <blockquote
              className="
                mx-auto
                mt-8
                max-w-4xl
                text-3xl
                font-black
                leading-[1.05]
                tracking-[-0.03em]
                sm:text-4xl
                md:text-5xl
              "
            >
              "LIFE IS A JOURNEY.
              <br />
              ENJOY THE PROCESS.
              <br />
              <span className="text-amber-400">KEEP RIDING.</span>"
            </blockquote>

            <p
              className="
                mx-auto
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-gray-500
                sm:text-base
                sm:leading-8
              "
            >
              No matter how difficult the road becomes, keep moving until you
              are certain you have reached the destination you chose.
            </p>

            {/* Signature */}

            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-zinc-800 sm:w-10" />

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-gray-700
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                FORGED IN CODE.
              </span>

              <span className="h-px w-8 bg-zinc-800 sm:w-10" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
