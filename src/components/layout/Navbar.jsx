import { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Toolbox", href: "#toolbox" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-300
        ${
          isScrolled
            ? "border-zinc-800/80 bg-black/90 backdrop-blur-md"
            : "border-transparent bg-black/40"
        }
      `}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        {/* ================= LOGO ================= */}

        <a
          href="#home"
          className="group flex items-center gap-1 text-sm font-black tracking-[0.2em]"
        >
          <span className="text-white transition-colors duration-300 group-hover:text-gray-300">
            FORGED IN
          </span>

          <span className="text-[#A62C2C]">CODE.</span>
        </a>

        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    py-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    transition-colors
                    duration-300
                    ${
                      isActive ? "text-white" : "text-gray-500 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {/* Active / Hover Line */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-px
                      bg-[#A62C2C]
                      transition-all
                      duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border
            border-zinc-800
            text-xl
            text-gray-400
            transition
            duration-300
            hover:border-[#A62C2C]
            hover:text-[#A62C2C]
            md:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      {isOpen && (
        <div className="border-t border-zinc-900 bg-black/95 px-6 py-8 backdrop-blur-md md:hidden">
          <ul className="space-y-6">
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      group
                      flex
                      items-center
                      gap-4
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {/* Number */}

                    <span
                      className={`
                        font-mono
                        text-[10px]
                        ${isActive ? "text-[#A62C2C]" : "text-gray-700"}
                      `}
                    >
                      0{index + 1}
                    </span>

                    {/* Label */}

                    <span>{item.label}</span>

                    {/* Active Arrow */}

                    {isActive && (
                      <span className="ml-auto text-[#A62C2C]">→</span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
