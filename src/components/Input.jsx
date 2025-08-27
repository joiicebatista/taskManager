import { forwardRef } from "react"

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={rest.id}
        className="text-dark-blue text-left text-sm font-semibold"
      >
        {label}
      </label>
      <input
        className="outline-primary placeholder:text-text-gray rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm"
        ref={ref}
        {...rest}
      />
      <p className="text-left text-xs text-red-500">{errorMessage}</p>
    </div>
  )
})
Input.displayName = "Input"
export default Input
