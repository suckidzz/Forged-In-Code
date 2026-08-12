import ScrollReveal from "../ui/ScrollReveal";

function Toolbox() {
  const toolbox = [
    {
      category: "FRONTEND",
      code: "UI-01",
      description: "Tools I use to turn ideas into interfaces.",
      tools: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "BACKEND",
      code: "API-02",
      description: "Tools I use to build application logic and APIs.",
      tools: ["Python", "Flask", "PHP", "Laravel", "Java"],
    },
    {
      category: "DATABASE",
      code: "DB-03",
      description: "Tools I use to store, structure, and manage data.",
      tools: ["MySQL", "SQL"],
    },
    {
      category: "TOOLS & PLATFORM",
      code: "LAB-04",
      description:
        "Tools that support development, experimentation, and problem solving.",
      tools: ["Git", "GitHub", "VS Code", "ThingSpeak", "Wokwi"],
    },
  ];

  return (
    <section
      id="toolbox"
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
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.35em] text-[#A62C2C] sm:tracking-[0.4em]">
              <span className="h-px w-8 shrink-0 bg-[#A62C2C]" />
              TOOLBOX / THE GARAGE
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
              TOOLS
              <br />
              <span className="text-amber-400">I RIDE WITH.</span>
            </h2>

            <p
              className="
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              A collection of technologies and tools I have used throughout my
              journey to build, experiment, solve problems, and keep learning.
            </p>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* TOOLBOX GRID */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {toolbox.map((section, index) => (
            <ScrollReveal
              key={section.category}
              delay={index * 100}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A62C2C]
                  sm:p-8
                "
              >
                {/* ========================================= */}
                {/* TOP ACCENT */}
                {/* ========================================= */}

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

                {/* ========================================= */}
                {/* LEFT ACCENT */}
                {/* ========================================= */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-px
                    bg-[#A62C2C]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ========================================= */}
                {/* CARD HEADER */}
                {/* ========================================= */}

                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-[#A62C2C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-[0.2em]
                      text-gray-700
                      sm:text-xs
                    "
                  >
                    {section.code}
                  </span>
                </div>

                {/* ========================================= */}
                {/* CATEGORY */}
                {/* ========================================= */}

                <h3
                  className="
                    mt-8
                    break-words
                    text-2xl
                    font-black
                    leading-tight
                    tracking-[-0.02em]
                    sm:text-3xl
                  "
                >
                  {section.category}
                </h3>

                {/* ========================================= */}
                {/* DESCRIPTION */}
                {/* ========================================= */}

                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-7
                    text-gray-500
                    sm:text-base
                  "
                >
                  {section.description}
                </p>

                {/* ========================================= */}
                {/* TOOLS */}
                {/* ========================================= */}

                <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                  {section.tools.map((tool) => (
                    <span
                      key={tool}
                      className="
                        max-w-full
                        break-words
                        border
                        border-zinc-800
                        px-3
                        py-2
                        text-[11px]
                        tracking-wide
                        text-gray-400
                        transition-all
                        duration-300
                        hover:border-amber-400
                        hover:text-amber-400
                        sm:px-4
                        sm:text-xs
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* ========================================= */}
                {/* CARD FOOTER */}
                {/* ========================================= */}

                <div
                  className="
                    mt-10
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-zinc-900
                    pt-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <span
                    className="
                      text-[9px]
                      tracking-[0.25em]
                      text-gray-700
                      sm:text-[10px]
                      sm:tracking-[0.3em]
                    "
                  >
                    SYSTEM READY
                  </span>

                  <span className="font-mono text-[10px] text-[#A62C2C] sm:text-xs">
                    // FORGED
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* ================================================= */}
        {/* BOTTOM STATEMENT */}
        {/* ================================================= */}

        <ScrollReveal delay={300}>
          <div className="mt-20 border-t border-zinc-900 pt-8 sm:mt-24">
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
                  leading-6
                  tracking-[0.25em]
                  text-gray-600
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                THE TOOL DOESN'T BUILD THE MACHINE.
              </span>

              <span className="font-mono text-xs tracking-[0.15em] text-amber-400 sm:text-sm">
                THE BUILDER DOES.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Toolbox;
