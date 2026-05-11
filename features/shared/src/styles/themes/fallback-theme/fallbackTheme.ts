import type { CustomTheme } from '../themes.types'
import { darkTheme } from '../dark-theme'

export const fallbackTheme: CustomTheme = darkTheme

export type FallbackTheme = typeof fallbackTheme
