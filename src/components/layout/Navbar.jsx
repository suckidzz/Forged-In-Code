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
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 40);

      const sections = menuItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const scrollPosition = scrollY + 200;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-zinc-800/80 bg-black/90 backdrop-blur-md"
          : "border-transparent bg-black"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* ================= LOGO ================= */}

        <a
          href="#home"
          className="group text-sm font-black tracking-[0.2em] text-white transition duration-300"
        >
          FORGED IN{" "}
          <span className="text-[#A62C2C] transition duration-300 group-hover:text-red-400">
            CODE.
          </span>
        </a>

        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => {
            const sectionName = item.href.substring(1);
            const isActive = activeSection === sectionName;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-[#A62C2C]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item.label}

                  {/* Active indicator */}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#A62C2C] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white transition duration-300 hover:text-[#A62C2C] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`overflow-hidden border-t border-zinc-900 bg-black transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-6">
          {menuItems.map((item) => {
            const sectionName = item.href.substring(1);
            const isActive = activeSection === sectionName;

            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleMobileClick}
                  className={`flex items-center justify-between border-b border-zinc-900 py-4 text-lg font-semibold transition duration-300 ${
                    isActive
                      ? "text-[#A62C2C]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>

                  <span
                    className={`text-sm transition duration-300 ${
                      isActive
                        ? "translate-x-0 text-[#A62C2C]"
                        : "-translate-x-2 text-gray-700"
                    }`}
                  >
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
