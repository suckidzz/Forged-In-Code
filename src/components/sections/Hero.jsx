import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-black
        px-6
        pb-20
        pt-32
        text-white
        md:px-10
        md:pt-24
      "
    >
      {/* ================= BACKGROUND DETAIL ================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
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

      {/* ================= MAIN ================= */}

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          items-center
          justify-between
          gap-16
          lg:gap-20
        "
      >
        {/* ================= LEFT ================= */}

        <div className="max-w-4xl">
          {/* Label */}

          <div
            className="
              animate-[fadeUp_0.7s_ease-out_forwards]
              opacity-0
            "
            style={{ animationDelay: "100ms" }}
          >
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#A62C2C]">
              <span className="h-px w-8 bg-[#A62C2C]" />
              Software Developer
            </p>
          </div>

          {/* BUILD */}

          <h1
            className="
              animate-[fadeUp_0.7s_ease-out_forwards]
              text-6xl
              font-black
              leading-[0.9]
              tracking-[-0.04em]
              opacity-0
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
            "
            style={{ animationDelay: "200ms" }}
          >
            BUILD.
          </h1>

          {/* LEARN */}

          <h1
            className="
              animate-[fadeUp_0.7s_ease-out_forwards]
              text-6xl
              font-black
              leading-[0.9]
              tracking-[-0.04em]
              text-amber-400
              opacity-0
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
            "
            style={{ animationDelay: "300ms" }}
          >
            LEARN.
          </h1>

          {/* KEEP RIDING */}

          <h1
            className="
              animate-[fadeUp_0.7s_ease-out_forwards]
              text-6xl
              font-black
              leading-[0.9]
              tracking-[-0.04em]
              opacity-0
              sm:text-7xl
              md:text-8xl
              lg:text-9xl
            "
            style={{ animationDelay: "400ms" }}
          >
            KEEP RIDING.
          </h1>

          {/* Description */}

          <p
            className="
              mt-8
              max-w-xl
              animate-[fadeUp_0.7s_ease-out_forwards]
              text-base
              leading-8
              text-gray-400
              opacity-0
              md:text-lg
            "
            style={{ animationDelay: "550ms" }}
          >
            I build software that helps people and grows with every journey.
          </p>

          {/* Button */}

          <div
            className="
              mt-10
              animate-[fadeUp_0.7s_ease-out_forwards]
              opacity-0
            "
            style={{ animationDelay: "700ms" }}
          >
            <Button
              onClick={() => {
                document.getElementById("journey")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explore Journey
            </Button>
          </div>
        </div>

        {/* ================= RIGHT / PORTRAIT ================= */}

        <div
          className="
            group
            relative
            hidden
            h-[550px]
            w-[400px]
            shrink-0
            animate-[fadeIn_1s_ease-out_forwards]
            items-center
            justify-center
            overflow-hidden
            border
            border-zinc-800
            bg-zinc-950
            opacity-0
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#A62C2C]
            lg:flex
          "
          style={{ animationDelay: "500ms" }}
        >
          {/* Corner details */}

          <div className="absolute left-0 top-0 h-12 w-px bg-[#A62C2C]" />

          <div className="absolute left-0 top-0 h-px w-12 bg-[#A62C2C]" />

          <div className="absolute bottom-0 right-0 h-12 w-px bg-[#A62C2C]" />

          <div className="absolute bottom-0 right-0 h-px w-12 bg-[#A62C2C]" />

          {/* Portrait placeholder */}

          <div className="text-center transition-transform duration-500 group-hover:scale-105">
            <span className="block text-sm font-semibold tracking-[0.3em] text-gray-600">
              PORTRAIT
            </span>

            <span className="mt-2 block text-xs tracking-widest text-gray-700">
              COMING SOON
            </span>

            <div className="mx-auto mt-6 h-px w-16 bg-[#A62C2C]" />

            <span className="mt-4 block font-mono text-[9px] tracking-[0.3em] text-gray-700">
              CRAFT / DISCIPLINE / PURPOSE
            </span>
          </div>

          {/* Bottom metadata */}

          <div className="absolute bottom-5 left-6 right-6">
            <div className="mb-3 h-px bg-zinc-900" />

            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-gray-700">
                FORGED / 001
              </span>

              <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#A62C2C]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A62C2C]" />
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div
        className="
          absolute
          bottom-8
          left-6
          hidden
          items-center
          gap-4
          text-[10px]
          tracking-[0.3em]
          text-gray-600
          md:flex
        "
      >
        <span className="h-px w-10 bg-zinc-800" />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}

export default Hero;
