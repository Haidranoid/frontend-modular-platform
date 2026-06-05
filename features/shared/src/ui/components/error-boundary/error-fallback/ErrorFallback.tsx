import { FC } from 'react'

export interface ErrorFallbackProps {
  error: Error
  resetErrors: CallableFunction
  resetState: CallableFunction
}

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrors,
  resetState,
}) => {
  const handleReset = () => {
    resetErrors()
    resetState()
    //window.location.replace(Paths.LOGIN)
  }

  return (
    <div style={{ padding: 20, color: 'red' }}>
      <h2>Something went wrong 😢</h2>
      <p>{error.message}</p>
      <button onClick={handleReset}>Try again</button>
    </div>
  )
}