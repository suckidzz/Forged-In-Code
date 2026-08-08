import ScrollReveal from "../ui/ScrollReveal";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "SKRIPSI TOPIC RECOMMENDER",
      description:
        "A web-based recommendation system that helps Informatics students discover suitable thesis topics using the K-Nearest Neighbor algorithm.",
      problem:
        "Students often struggle to identify thesis topics that match their interests and previous research.",
      solution:
        "Built a content-based recommendation system that analyzes thesis data and generates relevant topic recommendations.",
      tech: ["React", "Python", "Flask", "MySQL", "KNN"],
      status: "COMPLETED",
      link: "/projects/thesis-recommender",
    },

    {
      number: "02",
      title: "POSSER CYCLE",
      description:
        "A web-based motorcycle service and e-commerce platform designed around a vintage American motorcycle workshop concept.",
      problem:
        "Motorcycle workshops need a digital platform to organize services, products, and customer interactions.",
      solution:
        "Developed a web platform combining workshop service management and e-commerce functionality.",
      tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      status: "DEVELOPMENT",
      link: "#",
    },

    {
      number: "03",
      title: "IOT ENVIRONMENT MONITOR",
      description:
        "An IoT system for monitoring environmental conditions using sensors and sending collected data to an online dashboard.",
      problem:
        "Environmental conditions need to be monitored continuously without relying on manual observation.",
      solution:
        "Built an IoT monitoring system using ESP32 sensors and an online dashboard to visualize collected data.",
      tech: ["ESP32", "MQ135", "DHT22", "ThingSpeak"],
      status: "COMPLETED",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black px-6 py-32 text-white md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs tracking-[0.4em] text-[#A62C2C]">
              PROJECTS / MACHINES BUILT
            </p>

            <h2 className="mt-6 text-5xl font-black leading-none sm:text-6xl md:text-8xl">
              BUILT.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Every project is a machine built from ideas, problems,
              experiments, failures, and lessons learned along the way.
            </p>
          </div>
        </ScrollReveal>

        {/* ================= PROJECT LIST ================= */}

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.number} delay={index * 100}>
              <article
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-zinc-800
                  bg-zinc-950
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A62C2C]
                  md:p-10
                "
              >
                {/* Accent Line */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-0.5
                    bg-[#A62C2C]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ================= TOP ================= */}

                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-[#A62C2C]">
                    {project.number}
                  </span>

                  <span
                    className={`text-xs tracking-[0.2em] ${
                      project.status === "DEVELOPMENT"
                        ? "text-[#A62C2C]"
                        : "text-gray-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    mt-8
                    max-w-4xl
                    text-3xl
                    font-black
                    leading-tight
                    transition-colors
                    duration-300
                    group-hover:text-gray-100
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {project.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
                  {project.description}
                </p>

                {/* ================= PROBLEM / BUILD ================= */}

                <div className="mt-10 grid gap-8 border-y border-zinc-900 py-8 md:grid-cols-2">
                  {/* Problem */}

                  <div>
                    <p className="text-xs tracking-[0.3em] text-[#A62C2C]">
                      THE PROBLEM
                    </p>

                    <p className="mt-4 max-w-xl leading-7 text-gray-500">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}

                  <div>
                    <p className="text-xs tracking-[0.3em] text-amber-400">
                      THE BUILD
                    </p>

                    <p className="mt-4 max-w-xl leading-7 text-gray-500">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="
                        border
                        border-zinc-800
                        px-3
                        py-2
                        text-xs
                        tracking-wide
                        text-gray-400
                        transition-all
                        duration-300
                        group-hover:border-zinc-700
                        group-hover:text-gray-300
                        hover:border-[#A62C2C]
                        hover:text-white
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ================= ACTION ================= */}

                <div className="mt-10">
                  {project.link !== "#" ? (
                    <a
                      href={project.link}
                      aria-label={`View ${project.title} project`}
                      className="
                        group/button
                        inline-flex
                        items-center
                        gap-4
                        border
                        border-zinc-700
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        tracking-widest
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-amber-400
                        hover:bg-amber-400
                        hover:text-black
                        active:translate-y-0
                      "
                    >
                      <span>VIEW PROJECT</span>

                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-2
                        "
                      >
                        →
                      </span>
                    </a>
                  ) : (
                    <span
                      className="
                        inline-flex
                        cursor-not-allowed
                        items-center
                        gap-4
                        border
                        border-zinc-900
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        tracking-widest
                        text-gray-700
                      "
                    >
                      PROJECT DETAIL COMING SOON
                    </span>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* ================= CLOSING ================= */}

        <ScrollReveal delay={300}>
          <div className="mt-20 flex flex-col gap-4 border-t border-zinc-900 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs tracking-[0.3em] text-gray-600">
              BUILT THROUGH TRIAL & ERROR
            </span>

            <span className="font-mono text-sm text-[#A62C2C]">
              03 MACHINES / COUNTING...
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Projects;
