interface Props {
  label: string
  [props: string]: unknown
}
export const Button = ({ label, ...props }: Props) => (
  <button
    className="h-12 w-full bg-blue-500 rounded xl:w-32 shadow-md text-white"
    {...props}
  >
    {label}
  </button>
)
