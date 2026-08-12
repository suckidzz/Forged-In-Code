import { useNavigate } from "react-router-dom";
import ScrollReveal from "../../components/ui/ScrollReveal";
import ProjectNav from "../../components/ui/ProjectNav";

function ThesisRecommender() {
  const navigate = useNavigate();

  const backToProjects = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const technologies = ["React", "Python", "Flask", "MySQL", "KNN"];

  const features = [
    "Thesis topic recommendation",
    "Thesis title submission",
    "Lecturer and supervisor management",
    "Recommendation result display",
    "Student dashboard",
    "Submission status monitoring",
  ];

  const workflow = [
    {
      number: "01",
      title: "STUDENT INPUT",
      description:
        "The student provides thesis-related information that becomes the basis for the recommendation process.",
    },
    {
      number: "02",
      title: "DATA PROCESSING",
      description:
        "Thesis titles, abstracts, keywords, and concentration data are prepared and transformed into usable features.",
    },
    {
      number: "03",
      title: "KNN PROCESSING",
      description:
        "The K-Nearest Neighbor algorithm compares the input against existing thesis data to identify similar topics.",
    },
    {
      number: "04",
      title: "SIMILARITY ANALYSIS",
      description:
        "The system calculates similarity between the submitted input and available thesis records.",
    },
    {
      number: "05",
      title: "RECOMMENDATION",
      description:
        "The system presents relevant thesis topics that can help students explore possible research directions.",
    },
  ];

  const results = [
    {
      value: "89.24%",
      label: "NAVIGATION",
      description: "Users found the system navigation easy to understand.",
    },
    {
      value: "86.92%",
      label: "INTERFACE",
      description: "Users considered the interface attractive and usable.",
    },
    {
      value: "85.38%",
      label: "STATUS ACCURACY",
      description:
        "Users considered the thesis submission status information accurate.",
    },
    {
      value: "83.84%",
      label: "RECOMMENDATION",
      description: "Users considered the generated recommendations relevant.",
    },
  ];

  const challenges = [
    {
      number: "01",
      title: "RECOMMENDATION LOGIC",
      description:
        "Translating thesis information into a recommendation process required understanding how the available data could be represented and compared.",
    },
    {
      number: "02",
      title: "DATA STRUCTURE",
      description:
        "The system required a database structure that could support users, thesis submissions, assessment data, and recommendation-related information.",
    },
    {
      number: "03",
      title: "SYSTEM INTEGRATION",
      description:
        "The frontend, backend, database, and recommendation process had to work together as one consistent application.",
    },
  ];

  return (
    <section
      className="
        min-h-screen
        w-full
        max-w-full
        overflow-x-hidden
        bg-black
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          md:flex-row
        "
      >
        {/* =====================================================
            PROJECT NAVIGATION
        ===================================================== */}

        <ProjectNav />

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <main
          className="
            min-w-0
            w-full
            max-w-full
            flex-1
            overflow-x-hidden
            px-5
            py-16
            sm:px-8
            sm:py-24
            lg:px-12
          "
        >
          {/* =====================================================
              BACK BUTTON
          ===================================================== */}

          <ScrollReveal>
            <button
              type="button"
              onClick={backToProjects}
              className="
                group
                inline-flex
                max-w-full
                items-center
                gap-3
                text-xs
                font-semibold
                tracking-[0.25em]
                text-gray-500
                transition
                duration-300
                hover:text-amber-400
              "
            >
              <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-2">
                ←
              </span>

              <span>BACK TO PROJECTS</span>
            </button>
          </ScrollReveal>

          {/* =====================================================
              HERO
          ===================================================== */}

          <ScrollReveal delay={100}>
            <div className="mt-12 w-full max-w-5xl sm:mt-16">
              <p className="flex max-w-full items-center gap-3 text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs sm:tracking-[0.4em]">
                <span className="h-px w-7 shrink-0 bg-[#A62C2C] sm:w-8" />

                <span className="min-w-0 break-words">
                  PROJECT 01 / WEB APPLICATION
                </span>
              </p>

              <h1
                className="
                  mt-6
                  w-full
                  max-w-full
                  break-words
                  font-black
                  text-[clamp(2.75rem,11.5vw,6rem)]
                  leading-[0.88]
                  tracking-[-0.045em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                <span className="block">SKRIPSI</span>
                <span className="block">TOPIC</span>
                <span className="block text-amber-400">RECOMMENDER.</span>
              </h1>

              <p
                className="
                  mt-8
                  w-full
                  max-w-3xl
                  break-words
                  text-base
                  leading-7
                  text-gray-400
                  sm:mt-10
                  sm:text-lg
                  sm:leading-8
                  md:text-xl
                "
              >
                A web-based recommendation system designed to help Informatics
                Engineering students discover suitable thesis topics using the
                K-Nearest Neighbor algorithm.
              </p>
            </div>
          </ScrollReveal>

          {/* =====================================================
              PROJECT META
          ===================================================== */}

          <ScrollReveal delay={200}>
            <div className="mt-14 grid w-full max-w-full border-y border-zinc-900 sm:mt-16 sm:grid-cols-3">
              <div className="border-b border-zinc-900 px-5 py-6 sm:border-b-0 sm:border-r sm:px-6">
                <p className="text-[9px] tracking-[0.3em] text-gray-600">
                  TYPE
                </p>

                <p className="mt-3 break-words text-xs font-semibold text-gray-300 sm:text-sm">
                  WEB APPLICATION
                </p>
              </div>

              <div className="border-b border-zinc-900 px-5 py-6 sm:border-b-0 sm:border-r sm:px-6">
                <p className="text-[9px] tracking-[0.3em] text-gray-600">
                  CATEGORY
                </p>

                <p className="mt-3 break-words text-xs font-semibold text-gray-300 sm:text-sm">
                  RECOMMENDATION SYSTEM
                </p>
              </div>

              <div className="px-5 py-6 sm:px-6">
                <p className="text-[9px] tracking-[0.3em] text-gray-600">
                  STATUS
                </p>

                <p className="mt-3 break-words text-xs font-semibold text-[#A62C2C] sm:text-sm">
                  COMPLETED
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* =====================================================
              TECHNOLOGY
          ===================================================== */}

          <ScrollReveal delay={250}>
            <div className="mt-14 w-full max-w-full border-y border-zinc-900 py-8 sm:mt-16">
              <p className="mb-6 text-[9px] tracking-[0.3em] text-gray-600 sm:text-xs">
                TECHNOLOGY / STACK
              </p>

              <div className="flex w-full max-w-full flex-wrap gap-2 sm:gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      shrink-0
                      border
                      border-zinc-800
                      px-4
                      py-2.5
                      text-[10px]
                      font-semibold
                      tracking-wide
                      text-gray-400
                      transition
                      duration-300
                      hover:border-[#A62C2C]
                      hover:text-white
                      sm:px-5
                      sm:py-3
                      sm:text-xs
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* =====================================================
              PROBLEM
          ===================================================== */}

          <ScrollReveal>
            <section
              id="problem"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  01 / PROBLEM
                </p>

                <h2
                  className="
                    mt-4
                    w-full
                    max-w-full
                    break-words
                    text-3xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.03em]
                    sm:text-4xl
                  "
                >
                  THE PROBLEM
                </h2>
              </div>

              <div className="min-w-0 md:col-span-2">
                <p className="break-words text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                  Students often experience difficulties when deciding on a
                  suitable thesis topic. The large number of possible topics,
                  different research interests, and limited references can make
                  the decision process challenging.
                </p>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  This project was developed to provide students with a more
                  structured way to explore potential thesis topics based on
                  similarities with existing research data.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              APPROACH
          ===================================================== */}

          <ScrollReveal>
            <section
              id="approach"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  02 / APPROACH
                </p>

                <h2
                  className="
                    mt-4
                    w-full
                    max-w-full
                    break-words
                    text-3xl
                    font-black
                    leading-[0.95]
                    tracking-[-0.03em]
                    sm:text-4xl
                  "
                >
                  THE APPROACH
                </h2>
              </div>

              <div className="min-w-0 md:col-span-2">
                <p className="break-words text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                  The system uses a content-based recommendation approach with
                  the K-Nearest Neighbor algorithm. Thesis titles, abstracts,
                  keywords, and concentration data are processed to identify
                  topics that are similar to the student's input.
                </p>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  Instead of simply displaying a static list of thesis titles,
                  the system attempts to provide recommendations based on the
                  relationship between the user's input and existing thesis
                  records.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              WORKFLOW
          ===================================================== */}

          <ScrollReveal>
            <section
              id="workflow"
              className="
                mt-20
                w-full
                max-w-full
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:pt-24
              "
            >
              <div className="w-full max-w-3xl">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  03 / SYSTEM FLOW
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                  HOW IT WORKS.
                </h2>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  The recommendation process connects student input, thesis
                  data, algorithmic processing, and recommendation results into
                  one workflow.
                </p>
              </div>

              <div
                className="
                  mt-10
                  grid
                  w-full
                  max-w-full
                  min-w-0
                  gap-px
                  overflow-hidden
                  border
                  border-zinc-800
                  bg-zinc-800
                  sm:mt-14
                  sm:grid-cols-2
                  lg:grid-cols-5
                "
              >
                {workflow.map((step) => (
                  <article
                    key={step.number}
                    className="
                      w-full
                      max-w-full
                      min-w-0
                      overflow-hidden
                      bg-black
                      p-5
                      transition
                      duration-300
                      hover:bg-zinc-950
                      sm:p-6
                      md:p-7
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="shrink-0 font-mono text-[10px] text-[#A62C2C]">
                        {step.number}
                      </span>

                      <span className="shrink-0 text-[8px] tracking-[0.2em] text-gray-700">
                        STEP
                      </span>
                    </div>

                    <h3 className="mt-10 break-words text-lg font-black leading-tight tracking-[-0.02em] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 break-words text-sm leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              FEATURES
          ===================================================== */}

          <ScrollReveal>
            <section
              id="features"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  04 / FEATURES
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-4xl">
                  KEY FEATURES
                </h2>
              </div>

              <div className="min-w-0 md:col-span-2">
                <div className="grid w-full min-w-0 gap-x-10 gap-y-6 sm:grid-cols-2">
                  {features.map((feature, index) => (
                    <div
                      key={feature}
                      className="group flex min-w-0 items-start gap-4 border-b border-zinc-900 pb-6"
                    >
                      <span className="shrink-0 font-mono text-[10px] text-[#A62C2C]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="min-w-0 break-words text-sm leading-7 text-gray-400 transition duration-300 group-hover:text-white sm:text-base">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              EVIDENCE
          ===================================================== */}

          <ScrollReveal>
            <section
              id="evidence"
              className="
                mt-20
                w-full
                max-w-full
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:pt-24
              "
            >
              <div className="w-full max-w-3xl">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  05 / EVIDENCE
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-5xl">
                  PROJECT EVIDENCE.
                </h2>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  Selected interface screens and system documentation will be
                  presented here to show how the application works in practice.
                </p>
              </div>

              <div className="mt-10 grid w-full min-w-0 gap-4 sm:mt-14 md:grid-cols-2">
                {[1, 2, 3, 4].map((number) => (
                  <div
                    key={number}
                    className="
                      flex
                      aspect-video
                      w-full
                      min-w-0
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      border-zinc-800
                      bg-zinc-950
                      transition
                      duration-300
                      hover:border-[#A62C2C]
                    "
                  >
                    <div className="min-w-0 px-4 text-center">
                      <p className="text-[9px] tracking-[0.25em] text-gray-600 sm:text-xs">
                        SCREENSHOT / 0{number}
                      </p>

                      <p className="mt-3 break-words text-xs text-gray-700 sm:text-sm">
                        {number === 1 && "LOGIN / DASHBOARD"}
                        {number === 2 && "RECOMMENDATION RESULT"}
                        {number === 3 && "THESIS SUBMISSION"}
                        {number === 4 && "MANAGEMENT / REVIEW"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              CONTRIBUTION
          ===================================================== */}

          <ScrollReveal>
            <section
              id="contribution"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  06 / ROLE
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-4xl">
                  MY CONTRIBUTION
                </h2>
              </div>

              <div className="min-w-0 md:col-span-2">
                <p className="break-words text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                  Designed and developed the web application, implemented the
                  recommendation logic, designed the database structure,
                  developed the user interface, and performed system testing.
                </p>

                <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2">
                  {[
                    [
                      "FRONTEND",
                      "React-based user interface and dashboard development.",
                    ],
                    [
                      "BACKEND",
                      "Python and Flask application logic and API development.",
                    ],
                    [
                      "DATABASE",
                      "MySQL database structure and application data management.",
                    ],
                    [
                      "ALGORITHM",
                      "K-Nearest Neighbor recommendation implementation.",
                    ],
                  ].map(([title, description]) => (
                    <div
                      key={title}
                      className="min-w-0 overflow-hidden border border-zinc-800 p-5 sm:p-6"
                    >
                      <p className="text-[9px] tracking-[0.3em] text-gray-600">
                        {title}
                      </p>

                      <p className="mt-3 break-words text-sm leading-6 text-gray-300">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              RESULTS
          ===================================================== */}

          <ScrollReveal>
            <section
              id="results"
              className="
                mt-20
                w-full
                max-w-full
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:pt-24
              "
            >
              <div className="w-full max-w-3xl">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  07 / RESULTS
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-5xl">
                  PROJECT RESULTS.
                </h2>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  Closed-beta evaluation results show how users perceived the
                  usability and recommendation functionality of the system.
                </p>
              </div>

              <div className="mt-10 grid w-full min-w-0 gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
                {results.map((result) => (
                  <article
                    key={result.label}
                    className="min-w-0 overflow-hidden bg-black p-6 transition duration-300 hover:bg-zinc-950 sm:p-7"
                  >
                    <p className="break-words font-mono text-3xl font-bold text-amber-400 sm:text-4xl">
                      {result.value}
                    </p>

                    <p className="mt-5 break-words text-[9px] font-semibold tracking-[0.25em] text-[#A62C2C] sm:mt-6 sm:text-xs">
                      {result.label}
                    </p>

                    <p className="mt-4 break-words text-sm leading-7 text-gray-600">
                      {result.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              CHALLENGES
          ===================================================== */}

          <ScrollReveal>
            <section
              id="challenges"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  08 / CHALLENGES
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-4xl">
                  WHAT WAS HARD.
                </h2>
              </div>

              <div className="min-w-0 space-y-8 md:col-span-2">
                {challenges.map((challenge) => (
                  <article
                    key={challenge.number}
                    className="group min-w-0 border-b border-zinc-900 pb-8"
                  >
                    <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                      <span className="shrink-0 font-mono text-[10px] text-[#A62C2C]">
                        {challenge.number}
                      </span>

                      <div className="min-w-0">
                        <h3 className="break-words text-lg font-black leading-tight transition duration-300 group-hover:text-amber-400 sm:text-xl">
                          {challenge.title}
                        </h3>

                        <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              LESSONS
          ===================================================== */}

          <ScrollReveal>
            <section
              id="lessons"
              className="
                mt-20
                grid
                w-full
                max-w-full
                min-w-0
                gap-8
                overflow-hidden
                border-t
                border-zinc-900
                pt-16
                sm:mt-28
                sm:gap-10
                sm:pt-24
                md:grid-cols-3
                md:gap-12
              "
            >
              <div className="min-w-0">
                <p className="text-[9px] tracking-[0.3em] text-[#A62C2C] sm:text-xs">
                  09 / LESSONS
                </p>

                <h2 className="mt-4 break-words text-3xl font-black leading-[0.95] sm:text-4xl">
                  LESSONS LEARNED
                </h2>
              </div>

              <div className="min-w-0 md:col-span-2">
                <p className="break-words text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
                  This project taught me how to transform a real-world problem
                  into a software solution, work with structured data, implement
                  a recommendation algorithm, and continuously improve the
                  system through testing.
                </p>

                <p className="mt-6 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                  More importantly, the project showed me that software
                  development is not only about writing code. Understanding the
                  problem, structuring the data, designing the user experience,
                  testing the result, and learning from limitations are equally
                  important parts of building a useful system.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* =====================================================
              FINAL STATEMENT
          ===================================================== */}

          <ScrollReveal>
            <section className="mt-20 w-full max-w-full overflow-hidden border-y border-zinc-900 py-16 text-center sm:mt-28 sm:py-20">
              <p className="text-[9px] tracking-[0.35em] text-gray-600 sm:text-xs sm:tracking-[0.4em]">
                PROJECT REFLECTION
              </p>

              <blockquote className="mx-auto mt-8 max-w-4xl break-words text-3xl font-black leading-[0.95] tracking-[-0.03em] sm:text-4xl md:text-5xl">
                BUILD THE SOLUTION.
                <br />
                <span className="text-amber-400">LEARN FROM THE PROCESS.</span>
              </blockquote>

              <p className="mx-auto mt-8 max-w-2xl break-words px-2 text-sm leading-7 text-gray-600 sm:text-base">
                A project is never only about the final product. The process of
                solving problems, testing ideas, and improving the system is
                where the real experience is built.
              </p>
            </section>
          </ScrollReveal>

          {/* =====================================================
              PROJECT ACTION
          ===================================================== */}

          <ScrollReveal>
            <div className="mt-12 flex w-full max-w-full flex-col gap-3 border-t border-zinc-900 pt-8 sm:mt-16 sm:flex-row sm:gap-4 sm:pt-10">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-4
                  bg-amber-400
                  px-6
                  py-4
                  text-xs
                  font-bold
                  tracking-[0.15em]
                  text-black
                  transition
                  duration-300
                  hover:bg-amber-300
                  sm:w-auto
                  sm:px-7
                "
              >
                VIEW GITHUB
                <span>→</span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-4
                  border
                  border-zinc-700
                  px-6
                  py-4
                  text-xs
                  font-bold
                  tracking-[0.15em]
                  text-white
                  transition
                  duration-300
                  hover:border-[#A62C2C]
                  hover:text-[#A62C2C]
                  sm:w-auto
                  sm:px-7
                "
              >
                LIVE DEMO
                <span>→</span>
              </a>
            </div>
          </ScrollReveal>

          {/* =====================================================
              BACK TO PROJECTS
          ===================================================== */}

          <ScrollReveal>
            <div className="mt-16 flex w-full max-w-full flex-col gap-5 border-t border-zinc-900 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={backToProjects}
                className="
                  group
                  inline-flex
                  max-w-full
                  items-center
                  gap-3
                  text-xs
                  tracking-[0.25em]
                  text-gray-600
                  transition
                  duration-300
                  hover:text-white
                "
              >
                <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-2">
                  ←
                </span>
                BACK TO PROJECTS
              </button>

              <span className="break-words font-mono text-[9px] tracking-[0.15em] text-[#A62C2C] sm:text-xs sm:tracking-[0.2em]">
                PROJECT 01 / FORGED IN CODE
              </span>
            </div>
          </ScrollReveal>
        </main>
      </div>
    </section>
  );
}

export default ThesisRecommender;
