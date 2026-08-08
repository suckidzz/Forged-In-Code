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
          <div className="mb-20">
            <p className="flex items-center gap-3 text-xs tracking-[0.4em] text-[#A62C2C]">
              <span className="h-px w-8 bg-[#A62C2C]" />
              ABOUT / THE RIDER
            </p>

            <h2 className="mt-6 text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-8xl">
              THE PERSON
              <br />
              <span className="text-amber-400">BEHIND THE CODE.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* ================= INTRODUCTION ================= */}

        <ScrollReveal delay={100}>
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Main Statement */}

            <div>
              <p className="text-2xl font-semibold leading-relaxed md:text-3xl">
                I am a software developer who is still learning, still building,
                and still finding better ways to solve problems.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-[#A62C2C]" />

                <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600">
                  STILL BUILDING
                </span>
              </div>
            </div>

            {/* Story */}

            <div className="space-y-6 leading-8 text-gray-400">
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

        {/* ================= DIVIDER ================= */}

        <ScrollReveal delay={150}>
          <div className="my-24 h-px bg-zinc-900" />
        </ScrollReveal>

        {/* ================= VALUES ================= */}

        <ScrollReveal delay={200}>
          <div>
            {/* Section Label */}

            <div className="mb-12 flex items-center gap-4">
              <span className="h-px w-12 bg-[#A62C2C]" />

              <p className="text-xs tracking-[0.4em] text-gray-500">
                WHAT I BRING
              </p>
            </div>

            {/* Value Grid */}

            <div className="grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 md:grid-cols-2">
              {values.map((value, index) => (
                <ScrollReveal key={value.number} delay={index * 100}>
                  <article
                    className="
                      group
                      h-full
                      bg-black
                      p-8
                      transition-all
                      duration-500
                      hover:bg-zinc-950
                      md:p-10
                    "
                  >
                    {/* Top */}

                    <div className="flex items-start justify-between">
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

                      <span className="text-xs tracking-[0.3em] text-gray-700">
                        VALUE
                      </span>
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        mt-10
                        text-2xl
                        font-black
                        transition-colors
                        duration-300
                        group-hover:text-amber-400
                      "
                    >
                      {value.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 max-w-md leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                      {value.description}
                    </p>

                    {/* Bottom indicator */}

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-6 bg-zinc-800 transition-all duration-500 group-hover:w-12 group-hover:bg-[#A62C2C]" />

                      <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
                        0{index + 1} / PRINCIPLE
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ================= PHILOSOPHY ================= */}

        <ScrollReveal delay={300}>
          <div className="mt-24 border-y border-zinc-900 py-16 text-center">
            <p className="text-xs tracking-[0.4em] text-[#A62C2C]">
              PERSONAL PHILOSOPHY
            </p>

            <blockquote className="mx-auto mt-8 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              "LIFE IS A JOURNEY.
              <br />
              ENJOY THE PROCESS.
              <br />
              <span className="text-amber-400">KEEP RIDING.</span>"
            </blockquote>

            <p className="mx-auto mt-8 max-w-2xl leading-7 text-gray-500">
              No matter how difficult the road becomes, keep moving until you
              are certain you have reached the destination you chose.
            </p>

            {/* Signature */}

            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-zinc-800" />

              <span className="font-mono text-[10px] tracking-[0.3em] text-gray-700">
                FORGED IN CODE.
              </span>

              <span className="h-px w-10 bg-zinc-800" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
