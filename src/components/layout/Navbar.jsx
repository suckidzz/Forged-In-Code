import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Toolbox", href: "#toolbox" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      let currentSection = "home";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-900 bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}

        <a
          href="#home"
          onClick={handleNavigation}
          className="text-sm font-black tracking-[0.2em] text-white"
        >
          FORGED IN <span className="text-amber-400">CODE.</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-amber-400"
                    : "text-gray-400 hover:text-amber-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="border-t border-zinc-900 bg-black px-6 py-8 md:hidden">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleNavigation}
                  className={`block text-lg font-semibold transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-amber-400"
                      : "text-gray-300 hover:text-amber-400"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
