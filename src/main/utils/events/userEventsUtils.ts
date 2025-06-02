import { HandleSpaceEvent } from './index.types'

export const handleSpaceEvent: HandleSpaceEvent = (e) => {
  if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
    e.preventDefault()
    e.currentTarget.click() // Simulate the same behavior as clicking
  }
}
