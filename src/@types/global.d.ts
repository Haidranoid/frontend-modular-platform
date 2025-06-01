// global.d.ts

declare global {
  interface Window {
    reports: {
      coverage: () => void
      cypress: () => void
    }
  }
  type Callback = () => void
}

export {} // Ensures it is treated as a module
