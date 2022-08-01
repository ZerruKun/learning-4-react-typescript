interface ErrorProps {
    error: string
}

const ErrorMessage = ({error}: ErrorProps) => {
  return (
    <p className="text-center text-red-600">{error}</p>
  )
}

export default ErrorMessage;
