interface Props {
  label: string
  alt?: boolean
  [props: string]: unknown
}
export const Input = ({ label, alt, ...props }: Props) => {
  return (
    <div
      className={`w-full flex flex-row items-center my-2 ${alt && 'flex-col'}`}
    >
      {alt ? (
        <label
          className="w-full block font-medium text-gray-700"
          htmlFor={label}
        >
          {label}
        </label>
      ) : (
        <label
          className="px-2 py-2 text-gray-400 border-2 border-r-0 border-gray-300 rounded rounded-r-none bg-gray-50 whitespace-nowrap"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        className={`flex w-full p-2 border-2 border-gray-300 ${
          !alt ? 'rounded-none' : 'rounded-l-md'
        } rounded-r-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm`}
        {...props}
      />
    </div>
  )
}
