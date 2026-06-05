import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorFallback } from './error-fallback'

export interface ErrorBoundaryProps {
  children: ReactNode
  onReset: CallableFunction
}

export interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Caught by ErrorBoundary:', error, info)
  }

  handleResetAppErrors = () => {
    this.setState({ hasError: false, error: null })
  }

  handleResetAppState = () => {
    this.props.onReset()
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorFallback
          error={this.state.error}
          resetErrors={this.handleResetAppErrors}
          resetState={this.handleResetAppState}
        />
      )
    }

    return this.props.children
  }
}