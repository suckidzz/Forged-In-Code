import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    {
      label: "HOME",
      id: "home",
    },
    {
      label: "JOURNEY",
      id: "journey",
    },
    {
      label: "PROJECTS",
      id: "projects",
    },
    {
      label: "TOOLBOX",
      id: "toolbox",
    },
    {
      label: "ABOUT",
      id: "about",
    },
    {
      label: "CONTACT",
      id: "contact",
    },
  ];

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    /*
     * Kalau sedang bukan di halaman Home,
     * kembali dulu ke Home.
     */
    if (location.pathname !== "/") {
      navigate("/");

      /*
       * Tunggu React selesai render Home
       * sebelum mencari element.
       */
      setTimeout(() => {
        const target = document.getElementById(sectionId);

        if (!target) return;

        const navbarOffset = 90;

        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth",
        });
      }, 150);

      return;
    }

    /*
     * Kalau sudah berada di Home,
     * langsung scroll ke section.
     */
    const target = document.getElementById(sectionId);

    if (!target) return;

    const navbarOffset = 90;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-zinc-900
        bg-black/90
        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          w-full
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="
            group
            flex
            min-w-0
            items-center
            gap-3
            text-left
          "
          aria-label="Go to home"
        >
          <span
            className="
              h-2
              w-2
              shrink-0
              rounded-full
              bg-[#A62C2C]
              transition-transform
              duration-300
              group-hover:scale-125
            "
          />

          <span
            className="
              truncate
              text-xs
              font-bold
              tracking-[0.18em]
              text-white
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            FORGED IN CODE.
          </span>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-7
            md:flex
            lg:gap-9
          "
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="
                group
                relative
                py-2
                text-[10px]
                font-semibold
                tracking-[0.2em]
                text-gray-500
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.label}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#A62C2C]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </button>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP STATUS
        ===================================================== */}

        <div
          className="
            hidden
            items-center
            gap-2
            md:flex
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#A62C2C]" />

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.2em]
              text-gray-600
            "
          >
            AVAILABLE
          </span>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-zinc-800
            text-gray-400
            transition
            duration-300
            hover:border-[#A62C2C]
            hover:text-white
            md:hidden
          "
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-4 flex-col gap-1">
            <span
              className={`
                h-px
                w-full
                bg-current
                transition-all
                duration-300
                ${menuOpen ? "translate-y-1 rotate-45" : ""}
              `}
            />

            <span
              className={`
                h-px
                w-full
                bg-current
                transition-all
                duration-300
                ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-px
                w-full
                bg-current
                transition-all
                duration-300
                ${menuOpen ? "-translate-y-1 -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-zinc-900
          bg-black
          transition-all
          duration-300
          md:hidden
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          className="
            flex
            flex-col
            px-5
            py-4
          "
          aria-label="Mobile navigation"
        >
          {navigation.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-zinc-900
                py-4
                text-left
                text-xs
                font-semibold
                tracking-[0.2em]
                text-gray-500
                transition-colors
                duration-300
                last:border-b-0
                hover:text-white
              "
            >
              <span className="flex items-center gap-4">
                <span
                  className="
                    font-mono
                    text-[9px]
                    text-[#A62C2C]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{item.label}</span>
              </span>

              <span
                className="
                  text-[#A62C2C]
                  opacity-0
                  transition
                  duration-300
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
