import Button from "../ui/Button";
import portrait from "../../assets/images/DSC_3013.JPG";

function Hero() {
  const scrollToJourney = () => {
    const journey = document.getElementById("journey");

    if (journey) {
      journey.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-screen
        w-full
        overflow-x-clip
        bg-black
        px-5
        pt-28
        pb-20
        sm:px-8
        sm:pt-32
        md:px-12
        lg:px-16
        lg:pt-32
        lg:pb-16
      "
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-1/2
          hidden
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-[#A62C2C]
          opacity-[0.04]
          blur-3xl
          lg:block
        "
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-9rem)]
          w-full
          max-w-7xl
          min-w-0
          items-center
        "
      >
        {/* =======================================================
            CONTENT WRAPPER
        ======================================================= */}

        <div
          className="
            flex
            w-full
            min-w-0
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT / MAIN CONTENT
          ===================================================== */}

          <div
            className="
              min-w-0
              w-full
              max-w-4xl
            "
          >
            {/* ---------------------------------------------------
                LABEL
            --------------------------------------------------- */}

            <div>
              <p
                className="
                  mb-6
                  flex
                  flex-wrap
                  items-center
                  gap-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#A62C2C]
                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                <span
                  aria-hidden="true"
                  className="h-px w-6 shrink-0 bg-[#A62C2C] sm:w-8"
                />

                <span>Software Developer</span>
              </p>
            </div>

            {/* ---------------------------------------------------
                BUILD
            --------------------------------------------------- */}

            <h1
              className="
                m-0
                w-full
                max-w-full
                break-words
                text-5xl
                font-black
                leading-[0.88]
                tracking-[-0.045em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
              "
            >
              BUILD.
            </h1>

            {/* ---------------------------------------------------
                LEARN
            --------------------------------------------------- */}

            <h1
              className="
    m-0
    w-full
    max-w-full
    break-words
    text-5xl
    font-black
    leading-[0.88]
    tracking-[-0.045em]
    text-amber-400
    sm:text-7xl
    md:text-8xl
    lg:text-9xl
  "
            >
              LEARN.
            </h1>

            {/* ---------------------------------------------------
                KEEP RIDING
            --------------------------------------------------- */}

            <h1
              className="
                m-0
                w-full
                max-w-full
                break-words
                text-5xl
                font-black
                leading-[0.88]
                tracking-[-0.045em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
              "
            >
              KEEP RIDING.
            </h1>

            {/* ---------------------------------------------------
                DESCRIPTION
            --------------------------------------------------- */}

            <p
              className="
                mt-8
                w-full
                max-w-xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              I build software that helps people and grows with every journey.
            </p>

            {/* ---------------------------------------------------
                BUTTON
            --------------------------------------------------- */}

            <div className="mt-10">
              <Button onClick={scrollToJourney}>Explore Journey</Button>
            </div>

            {/* ---------------------------------------------------
                BOTTOM IDENTITY
            --------------------------------------------------- */}

            <div
              className="
                mt-14
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-3
                sm:mt-16
                sm:gap-x-6
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-gray-700
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                FORGED / 001
              </span>

              <span
                aria-hidden="true"
                className="hidden h-px w-8 bg-zinc-800 sm:block sm:w-10"
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-gray-700
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                CRAFT
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-gray-700
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                DISCIPLINE
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-gray-700
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                PURPOSE
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT / PORTRAIT
          ===================================================== */}

          <div
            className="
              group
              relative
              mt-16
              hidden
              h-[550px]
              w-full
              max-w-[400px]
              shrink-0
              overflow-hidden
              border
              border-zinc-800
              bg-zinc-950
              transition-colors
              duration-500
              hover:border-[#A62C2C]
              lg:flex
            "
          >
            {/* ---------------------------------------------------
                CORNER DETAILS
            --------------------------------------------------- */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                z-20
                h-12
                w-px
                bg-[#A62C2C]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                z-20
                h-px
                w-12
                bg-[#A62C2C]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                right-0
                z-20
                h-12
                w-px
                bg-[#A62C2C]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                right-0
                z-20
                h-px
                w-12
                bg-[#A62C2C]
              "
            />

            {/* ---------------------------------------------------
                IMAGE
            --------------------------------------------------- */}

            <div className="relative h-full w-full min-w-0 overflow-hidden">
              <img
                src={portrait}
                alt="Portrait"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale
                  transition
                  duration-700
                  group-hover:scale-105
                  group-hover:grayscale-0
                "
              />

              {/* -------------------------------------------------
                  DARK OVERLAY
              ------------------------------------------------- */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-black/30
                  transition
                  duration-500
                  group-hover:bg-black/10
                "
              />

              {/* -------------------------------------------------
                  BOTTOM GRADIENT
              ------------------------------------------------- */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-48
                  bg-gradient-to-t
                  from-black
                  via-black/70
                  to-transparent
                "
              />

              {/* -------------------------------------------------
                  IDENTITY
              ------------------------------------------------- */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  min-w-0
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div className="min-w-0">
                    <span
                      className="
                        block
                        text-[10px]
                        tracking-[0.3em]
                        text-[#A62C2C]
                      "
                    >
                      PORTRAIT / 001
                    </span>

                    <span
                      className="
                        mt-2
                        block
                        text-[10px]
                        tracking-[0.15em]
                        text-gray-300
                        sm:text-xs
                        sm:tracking-[0.2em]
                      "
                    >
                      CRAFT / DISCIPLINE / PURPOSE
                    </span>
                  </div>

                  <span
                    className="
                      shrink-0
                      font-mono
                      text-xs
                      text-gray-500
                    "
                  >
                    FORGED
                  </span>
                </div>

                <div className="mt-4 h-px bg-zinc-800" />

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      tracking-[0.2em]
                      text-gray-700
                    "
                  >
                    FORGED / 001
                  </span>

                  <span
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      font-mono
                      text-[9px]
                      tracking-[0.2em]
                      text-[#A62C2C]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A62C2C]" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-6
          hidden
          items-center
          gap-4
          font-mono
          text-[9px]
          tracking-[0.3em]
          text-gray-600
          md:flex
          lg:left-10
        "
      >
        <span aria-hidden="true" className="h-px w-10 bg-zinc-800" />

        <span>SCROLL TO EXPLORE</span>
      </div>

      {/* =========================================================
          SYSTEM STATUS
      ========================================================= */}

      <div
        className="
          absolute
          bottom-8
          right-6
          hidden
          items-center
          gap-3
          font-mono
          text-[9px]
          tracking-[0.2em]
          text-gray-700
          md:flex
          lg:right-10
        "
      >
        <span className="h-2 w-2 rounded-full bg-[#A62C2C]" />

        <span>SYSTEM READY</span>
      </div>
    </section>
  );
}

export default Hero;
