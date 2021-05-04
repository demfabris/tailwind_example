interface Props {
  label: string
  [props: string]: unknown
}
export const Button = ({ label, ...props }: Props) => (
  <button
    className="w-full lg:w-32 justify-center px-4 py-2 font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    {...props}
  >
    {label}
  </button>
)
