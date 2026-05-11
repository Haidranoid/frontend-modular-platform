import React, { useState } from 'react'
import { render, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import ErrorBoundary from './ErrorBoundary'

interface Props {
  onCrash: () => void
}

const AppContent: React.FC<Props> = ({ onCrash }) => {
  return (
    <div>
      <p>All good</p>
      <button onClick={onCrash}>Crash Everything</button>
    </div>
  )
}

const Bomb = () => {
  throw new Error('Boom!')
}

const TestWrapper = () => {
  const [shouldCrash, setShouldCrash] = useState(false)

  return (
    <ErrorBoundary onReset={() => setShouldCrash(false)}>
      {shouldCrash ? <Bomb /> : <AppContent onCrash={() => setShouldCrash(true)} />}
    </ErrorBoundary>
  )
}

describe('ErrorBoundary', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {}) // suppress expected errors
  })

  it('should show fallback when error is thrown in render', async () => {
    render(<TestWrapper />)

    expect(screen.getByText(/all good/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /crash everything/i }))

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    expect(screen.getByText(/Boom!/i)).toBeInTheDocument()
  })

  it('renders fallback on error and recovers on Try again', async () => {
    render(<TestWrapper />)

    // Verify initial state
    expect(screen.getByText(/all good/i)).toBeInTheDocument()

    // Trigger the crash
    await user.click(screen.getByRole('button', { name: /crash everything/i }))

    // Error fallback appears
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    expect(screen.getByText(/boom/i)).toBeInTheDocument()

    // Click Try again (calls ErrorBoundary.reset)
    await user.click(screen.getByRole('button', { name: /try again/i }))

    // App should show fallback reset, but we also need to clear the crashing state
    // Because `shouldCrash` is still true, it crashes again unless we reset it

    // ⛔ Here's the key issue: The reset button resets the **ErrorBoundary state**, but not the `shouldCrash` flag in TestWrapper

    // ✅ Solution: Use a callback to let ErrorBoundary tell parent to reset the crashing state
  })

  it('recovers fully after clicking Try again', async () => {
    render(<TestWrapper />)

    expect(screen.getByText(/all good/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /crash everything/i }))

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /try again/i }))

    // Now that both ErrorBoundary and shouldCrash are reset
    expect(await screen.findByText(/all good/i)).toBeInTheDocument()
  })
})
