export type DialogType = 'default' | 'confirmation' | 'input' | 'select'

export type InputType = 'text' | 'email' | 'number'

export type OnResponseCallback = (response: boolean | string) => void
