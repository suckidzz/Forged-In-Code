import { useEffect, useState } from "react";

function ProjectNav() {
  const [activeSection, setActiveSection] = useState("problem");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    {
      id: "problem",
      number: "01",
      label: "THE PROBLEM",
    },
    {
      id: "approach",
      number: "02",
      label: "THE APPROACH",
    },
    {
      id: "workflow",
      number: "03",
      label: "SYSTEM FLOW",
    },
    {
      id: "features",
      number: "04",
      label: "KEY FEATURES",
    },
    {
      id: "evidence",
      number: "05",
      label: "EVIDENCE",
    },
    {
      id: "contribution",
      number: "06",
      label: "MY CONTRIBUTION",
    },
    {
      id: "results",
      number: "07",
      label: "RESULTS",
    },
    {
      id: "challenges",
      number: "08",
      label: "CHALLENGES",
    },
    {
      id: "lessons",
      number: "09",
      label: "LESSONS",
    },
  ];

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.1, 0.2, 0.35, 0.5],
        rootMargin: "-15% 0px -65% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    const offset = window.innerWidth < 768 ? 80 : 100;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setMobileOpen(false);
  };

  const active =
    sections.find((section) => section.id === activeSection) || sections[0];

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}

      <aside className="hidden w-60 shrink-0 md:block">
        <div className="sticky top-24 w-full border-r border-zinc-900 pr-8">
          {/* PROJECT LABEL */}

          <div className="mb-8">
            <p className="text-[9px] tracking-[0.35em] text-gray-600">
              PROJECT / 001
            </p>

            <p className="mt-2 text-xs font-bold tracking-[0.2em] text-white">
              THESIS
              <br />
              RECOMMENDER
            </p>

            <div className="mt-5 h-px w-8 bg-[#A62C2C]" />
          </div>

          {/* NAVIGATION */}

          <nav aria-label="Project sections">
            <p className="mb-4 text-[9px] tracking-[0.3em] text-gray-700">
              EXPLORE PROJECT
            </p>

            <div className="space-y-1">
              {sections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleNavigation(section.id)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-3
                      px-3
                      py-3
                      text-left
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-zinc-950 text-white"
                          : "text-gray-600 hover:bg-zinc-950 hover:text-gray-300"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                        h-full
                        w-px
                        transition-all
                        duration-300
                        ${isActive ? "bg-[#A62C2C]" : "bg-transparent"}
                      `}
                    />

                    <span
                      className={`
                        w-6
                        shrink-0
                        font-mono
                        text-[9px]
                        ${
                          isActive
                            ? "text-[#A62C2C]"
                            : "text-gray-700 group-hover:text-gray-500"
                        }
                      `}
                    >
                      {section.number}
                    </span>

                    <span
                      className={`
                        min-w-0
                        break-words
                        text-[10px]
                        font-semibold
                        tracking-[0.12em]
                        ${
                          isActive
                            ? "text-white"
                            : "text-gray-600 group-hover:text-gray-300"
                        }
                      `}
                    >
                      {section.label}
                    </span>

                    {isActive && (
                      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#A62C2C]" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* STATUS */}

          <div className="mt-10 border-t border-zinc-900 pt-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A62C2C]" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-gray-600">
                PROJECT COMPLETE
              </span>
            </div>

            <p className="mt-3 font-mono text-[8px] tracking-[0.15em] text-gray-800">
              FORGED / 001
            </p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div className="sticky top-0 z-50 block w-full max-w-full md:hidden">
        <div className="w-full border-b border-zinc-900 bg-black/95 backdrop-blur-xl">
          {/* MOBILE HEADER */}

          <div className="flex min-h-[72px] w-full items-center justify-between gap-4 px-5">
            <div className="min-w-0">
              <p className="text-[8px] tracking-[0.3em] text-gray-600">
                PROJECT / 001
              </p>

              <p className="mt-1 truncate text-xs font-bold tracking-[0.15em] text-white">
                THESIS RECOMMENDER
              </p>
            </div>

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close project navigation"
                  : "Open project navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((previous) => !previous)}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                border
                border-zinc-800
                text-gray-400
                transition
                duration-300
                hover:border-[#A62C2C]
                hover:text-white
              "
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className={`
                    h-px
                    w-full
                    bg-current
                    transition
                    duration-300
                    ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    h-px
                    w-full
                    bg-current
                    transition
                    duration-300
                    ${mobileOpen ? "opacity-0" : "opacity-100"}
                  `}
                />

                <span
                  className={`
                    h-px
                    w-full
                    bg-current
                    transition
                    duration-300
                    ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}
                  `}
                />
              </span>
            </button>
          </div>

          {/* CURRENT SECTION BAR */}

          <button
            type="button"
            onClick={() => setMobileOpen((previous) => !previous)}
            className="
              flex
              w-full
              items-center
              justify-between
              border-t
              border-zinc-900
              px-5
              py-3
              text-left
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="font-mono text-[9px] text-[#A62C2C]">
                {active.number}
              </span>

              <span className="truncate text-[9px] font-semibold tracking-[0.15em] text-white">
                {active.label}
              </span>
            </div>

            <span
              className={`
                shrink-0
                text-[10px]
                text-gray-600
                transition-transform
                duration-300
                ${mobileOpen ? "rotate-180" : ""}
              `}
            >
              ↓
            </span>
          </button>

          {/* DROPDOWN */}

          <div
            className={`
              overflow-hidden
              border-t
              border-zinc-900
              transition-all
              duration-300
              ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <nav
              aria-label="Mobile project sections"
              className="max-h-[60vh] overflow-y-auto px-3 py-3"
            >
              <div className="grid grid-cols-1 gap-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => handleNavigation(section.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-4
                        px-4
                        py-3
                        text-left
                        transition
                        duration-300
                        ${
                          isActive
                            ? "bg-zinc-950 text-white"
                            : "text-gray-600 hover:bg-zinc-950 hover:text-gray-300"
                        }
                      `}
                    >
                      <span
                        className={`
                          font-mono
                          text-[9px]
                          ${isActive ? "text-[#A62C2C]" : "text-gray-700"}
                        `}
                      >
                        {section.number}
                      </span>

                      <span
                        className={`
                          min-w-0
                          text-[10px]
                          font-semibold
                          tracking-[0.12em]
                          ${isActive ? "text-white" : "text-gray-600"}
                        `}
                      >
                        {section.label}
                      </span>

                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#A62C2C]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectNav;
