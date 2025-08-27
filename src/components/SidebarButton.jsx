import { Children } from "react"

const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "unselected") {
      return "text-dark-blue"
    }
    if (variant === "selected") {
      return " bg-[#E6F7F8] text-primary"
    }
  }
  return (
    <a
      href=""
      className={`${getVariantClasses()} flex items-center gap-2 rounded-lg px-6 py-3`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
