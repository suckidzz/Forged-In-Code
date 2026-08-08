function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        inline-flex
        items-center
        gap-4
        overflow-hidden
        border
        border-[#A62C2C]
        bg-transparent
        px-7
        py-3.5
        text-sm
        font-semibold
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:bg-[#A62C2C]
        hover:text-white
        hover:shadow-[0_0_30px_rgba(166,44,44,0.15)]
      "
    >
      <span>{children}</span>

      <span
        className="
          transition-transform
          duration-300
          group-hover:translate-x-2
        "
      >
        →
      </span>
    </button>
  );
}

export default Button;
