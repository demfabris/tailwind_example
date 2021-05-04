interface Props {
  label: string
  [props: string]: unknown
}
export const Input = ({ label, ...props }: Props) => {
  return (
    <div>
      <label className="text-blue-500 font-bold">{label}</label>
      <input
        className="w-full h-12 p-4 mb-4 bg-blue-100 rounded shadow-sm focus:bg-blue-200"
        {...props}
      />
    </div>
  )
}
