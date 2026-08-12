import ScrollReveal from "../ui/ScrollReveal";

const contacts = [
  {
    number: "01",
    label: "EMAIL",
    value: "kurniawan.nuranwar17@gmail.com",
    href: "mailto:kurniawan.nuranwar17@gmail.com",
  },
  {
    number: "02",
    label: "GITHUB",
    value: "github.com/suckidzz",
    href: "https://github.com/suckidzz",
  },
  {
    number: "03",
    label: "LINKEDIN",
    value: "linkedin.com/in/kvvvr",
    href: "https://www.linkedin.com/in/kvvvr/",
  },
  {
    number: "04",
    label: "INSTAGRAM",
    value: "instagram.com/kvvr___",
    href: "https://www.instagram.com/kvvr___/",
  },
];

function Contact() {
  return (
    <section
      id="contact"
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
            <p
              className="
                flex
                items-center
                gap-3
                text-xs
                font-semibold
                tracking-[0.35em]
                text-[#A62C2C]
                sm:tracking-[0.4em]
              "
            >
              <span className="h-px w-8 shrink-0 bg-[#A62C2C]" />
              CONTACT / KEEP IN TOUCH
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
              LET&apos;S
              <br />
              <span className="text-amber-400">RIDE.</span>
            </h2>

            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-gray-400
                sm:text-lg
              "
            >
              Every journey starts with a conversation. If you have an
              opportunity, a project, or simply want to connect, feel free to
              reach out.
            </p>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* CONTACT LIST */}
        {/* ================================================= */}

        <div className="border-t border-zinc-900">
          {contacts.map((contact, index) => (
            <ScrollReveal key={contact.number} delay={index * 100}>
              <a
                href={contact.href}
                target={contact.label === "EMAIL" ? undefined : "_blank"}
                rel={
                  contact.label === "EMAIL" ? undefined : "noopener noreferrer"
                }
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  gap-5
                  border-b
                  border-zinc-900
                  py-7
                  transition-all
                  duration-500
                  hover:border-[#A62C2C]
                  sm:py-8
                  md:flex-row
                  md:items-center
                  md:justify-between
                  md:gap-8
                "
              >
                {/* ================= LEFT ================= */}

                <div className="flex min-w-0 items-center gap-5 sm:gap-6">
                  <span
                    className="
                      shrink-0
                      font-mono
                      text-sm
                      text-[#A62C2C]
                      transition-colors
                      duration-300
                      group-hover:text-amber-400
                    "
                  >
                    {contact.number}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.25em]
                      text-gray-500
                      transition-colors
                      duration-300
                      group-hover:text-gray-300
                      sm:text-xs
                      sm:tracking-[0.3em]
                    "
                  >
                    {contact.label}
                  </span>
                </div>

                {/* ================= RIGHT ================= */}

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-4
                    md:justify-end
                    md:gap-6
                  "
                >
                  <span
                    className="
                      min-w-0
                      break-all
                      text-sm
                      leading-6
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:text-white
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {contact.value}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-lg
                      text-amber-400
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                      sm:text-xl
                    "
                  >
                    →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <ScrollReveal delay={300}>
          <div
            className="
              mt-16
              border
              border-zinc-900
              p-6
              transition-all
              duration-500
              hover:border-[#A62C2C]
              sm:p-8
              md:p-10
            "
          >
            <div
              className="
                flex
                flex-col
                gap-8
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* CTA TEXT */}

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    tracking-[0.25em]
                    text-gray-600
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  GOT SOMETHING IN MIND?
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    tracking-[-0.02em]
                    sm:text-3xl
                  "
                >
                  LET&apos;S BUILD SOMETHING.
                </h3>
              </div>

              {/* CTA BUTTON */}

              <a
                href="mailto:kurniawan.nuranwar17@gmail.com"
                className="
    group
    inline-flex
    items-center
    justify-center
    gap-4
    border
    border-amber-400
    px-6
    py-3
    text-sm
    font-semibold
    tracking-widest
    text-amber-400
    transition-all
    duration-300
    hover:bg-amber-400
    hover:text-black
  "
              >
                <span>START A CONVERSATION</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <ScrollReveal delay={400}>
          <div className="mt-20 border-t border-zinc-900 pt-8">
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
                  tracking-[0.25em]
                  text-gray-600
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                FORGED IN CODE
              </span>

              <span className="font-mono text-sm text-[#A62C2C]">
                KEEP RIDING.
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Contact;
