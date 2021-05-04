interface Props {
  label: string
  [props: string]: unknown
}
export const Input = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-row items-center my-2">
      <label
        className="w-28 py-2 px-2 border-2 border-gray-300 rounded rounded-r-none bg-gray-50 border-r-0 text-gray-400 whitespace-nowrap"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full p-2 border-2 border-gray-300 rounded-none rounded-r-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
        {...props}
      />
    </div>
  )
}
