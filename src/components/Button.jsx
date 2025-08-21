const Button = ({ variant = "primary", children, onClick }) => {
  const getVariantClasses = () => {
    if (variant === "ghost") {
      return "text-[#818181] bg-transparency"
    }
    if (variant === "primary") {
      return " bg-[#00ADB5] text-white"
    }
  }
  return (
    <button
      className={`flex items-center gap-2 rounded-md px-1 py-1 text-xs font-semibold transition hover:opacity-80 ${getVariantClasses()}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
