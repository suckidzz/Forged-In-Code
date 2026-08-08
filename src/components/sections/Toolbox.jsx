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
      className="min-h-screen bg-black px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mb-16">
          <p className="text-xs tracking-[0.4em] text-[#A62C2C]">
            TOOLBOX / THE GARAGE
          </p>

          <h2 className="mt-4 text-5xl font-black leading-none sm:text-6xl md:text-8xl">
            TOOLS
            <br />
            <span className="text-amber-400">I RIDE WITH.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            A collection of technologies and tools I have used throughout my
            journey to build, experiment, solve problems, and keep learning.
          </p>
        </div>

        {/* ================= TOOLBOX ================= */}

        <div className="grid gap-6 md:grid-cols-2">
          {toolbox.map((section, index) => (
            <article
              key={section.category}
              className="group relative overflow-hidden border border-zinc-800 bg-zinc-950 p-6 transition duration-500 hover:border-[#A62C2C] md:p-8"
            >
              {/* Red Accent */}

              <div className="absolute left-0 top-0 h-full w-1 bg-[#A62C2C] opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Top */}

              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-[#A62C2C]">
                  0{index + 1}
                </span>

                <span className="font-mono text-xs tracking-[0.2em] text-gray-700">
                  {section.code}
                </span>
              </div>

              {/* Category */}

              <h3 className="mt-8 text-2xl font-black md:text-3xl">
                {section.category}
              </h3>

              {/* Description */}

              <p className="mt-4 max-w-md leading-7 text-gray-500">
                {section.description}
              </p>

              {/* Tools */}

              <div className="mt-8 flex flex-wrap gap-3">
                {section.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-zinc-800 px-4 py-2 text-xs tracking-wide text-gray-400 transition duration-300 hover:border-amber-400 hover:text-amber-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Bottom */}

              <div className="mt-10 flex items-center justify-between border-t border-zinc-900 pt-5">
                <span className="text-[10px] tracking-[0.3em] text-gray-700">
                  SYSTEM READY
                </span>

                <span className="font-mono text-xs text-[#A62C2C]">
                  // FORGED
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mt-20 border-t border-zinc-900 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs tracking-[0.3em] text-gray-600">
              THE TOOL DOESN'T BUILD THE MACHINE.
            </span>

            <span className="font-mono text-sm text-amber-400">
              THE BUILDER DOES.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolbox;
