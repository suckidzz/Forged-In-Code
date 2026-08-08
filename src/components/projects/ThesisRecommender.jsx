import { useNavigate } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";

function ThesisRecommender() {
  const navigate = useNavigate();

  const backToProjects = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const technologies = ["React", "Python", "Flask", "MySQL", "KNN"];

  const features = [
    "Thesis topic recommendation",
    "Thesis title submission",
    "Lecturer and supervisor management",
    "Recommendation results",
    "Student dashboard",
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white md:px-10 lg:px-16">
      {/* ================= BACK ================= */}

      <div className="mx-auto max-w-6xl">
        <button
          onClick={backToProjects}
          className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] text-gray-500 transition duration-300 hover:text-amber-400"
        >
          <span className="transition duration-300 group-hover:-translate-x-2">
            ←
          </span>
          BACK TO PROJECTS
        </button>
      </div>

      {/* ================= HERO ================= */}

      <section className="mx-auto max-w-6xl pt-24">
        <ScrollReveal>
          <div>
            <p className="text-xs tracking-[0.4em] text-amber-400">
              PROJECT 01 / WEB APPLICATION
            </p>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.9] sm:text-6xl md:text-8xl">
              SKRIPSI
              <br />
              <span className="text-amber-400">TOPIC</span>
              <br />
              RECOMMENDER
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
              A web-based recommendation system designed to help Informatics
              Engineering students discover suitable thesis topics using the
              K-Nearest Neighbor algorithm.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Metadata */}

        <ScrollReveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="border border-zinc-800 px-4 py-2 text-xs tracking-[0.2em] text-gray-500">
              FINAL PROJECT
            </span>

            <span className="border border-zinc-800 px-4 py-2 text-xs tracking-[0.2em] text-gray-500">
              FULLSTACK
            </span>

            <span className="border border-[#A62C2C] px-4 py-2 text-xs tracking-[0.2em] text-[#A62C2C]">
              COMPLETED
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= TECHNOLOGY ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-y border-zinc-900 py-10">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] text-gray-600">
            TECHNOLOGY / STACK
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-zinc-800 px-5 py-3 text-sm text-gray-300 transition duration-300 hover:border-amber-400 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= PROBLEM ================= */}

      <section className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#A62C2C]">01</p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                THE PROBLEM
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-gray-400">
                Students often experience difficulties when deciding on a
                suitable thesis topic. The large number of possible topics,
                limited references, and uncertainty about research direction can
                make the decision process challenging.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= APPROACH ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-24">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm tracking-[0.3em] text-amber-400">02</p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                THE APPROACH
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-gray-400">
                The system uses a content-based recommendation approach with the
                K-Nearest Neighbor algorithm. Thesis titles, abstracts,
                keywords, and concentration data are processed to identify
                topics that are similar to the student's input.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-24">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm tracking-[0.3em] text-amber-400">03</p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                KEY FEATURES
              </h2>
            </div>

            <div className="md:col-span-2">
              <ul className="space-y-5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-4 text-lg text-gray-400"
                  >
                    <span className="text-amber-400">→</span>

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= CONTRIBUTION ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-24">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#A62C2C]">04</p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                MY CONTRIBUTION
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-gray-400">
                Designed and developed the web application, implemented the
                recommendation logic, designed the database structure, developed
                the user interface, integrated the backend services, and
                performed system testing.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= LESSONS ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-24">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-sm tracking-[0.3em] text-amber-400">05</p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                LESSONS LEARNED
              </h2>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg leading-8 text-gray-400">
                This project taught me how to transform a real-world problem
                into a software solution, work with structured data, implement a
                recommendation algorithm, and continuously improve the system
                through testing.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= PROJECT EVIDENCE ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-24">
        <ScrollReveal>
          <div>
            <p className="text-xs tracking-[0.3em] text-amber-400">
              PROJECT EVIDENCE
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              THE MACHINE.
            </h2>

            <p className="mt-6 max-w-2xl text-gray-500">
              A closer look at the system, interface, and implementation behind
              the project.
            </p>
          </div>
        </ScrollReveal>

        {/* Screenshot Placeholder */}

        <ScrollReveal>
          <div className="mt-12 flex min-h-[400px] items-center justify-center border border-zinc-800 bg-zinc-950">
            <div className="text-center">
              <p className="text-4xl text-[#A62C2C]">+</p>

              <p className="mt-4 text-sm tracking-[0.3em] text-gray-600">
                PROJECT SCREENSHOT
              </p>

              <p className="mt-2 text-xs text-gray-700">
                EVIDENCE WILL BE ADDED
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= BOTTOM ================= */}

      <section className="mx-auto mt-24 max-w-6xl border-t border-zinc-900 pt-12 pb-24">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row">
            <span className="border border-zinc-900 px-6 py-3 text-sm font-semibold tracking-widest text-gray-600">
              GITHUB COMING SOON
            </span>

            <span className="border border-zinc-900 px-6 py-3 text-sm font-semibold tracking-widest text-gray-600">
              LIVE DEMO COMING SOON
            </span>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-zinc-900 pt-8">
            <span className="text-xs tracking-[0.3em] text-gray-600">
              FORGED THROUGH TRIAL & ERROR
            </span>

            <span className="font-mono text-sm text-amber-400">
              KEEP RIDING.
            </span>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default ThesisRecommender;
