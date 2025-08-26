import { forwardRef } from "react"

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1">
      <label
        htmlFor={rest.id}
        className="text-left text-sm font-semibold text-[#35383E]"
      >
        {label}
      </label>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        ref={ref}
        {...rest}
      />
      <p className="text-left text-xs text-red-500">{errorMessage}</p>
    </div>
  )
})
Input.displayName = "Input"
export default Input
