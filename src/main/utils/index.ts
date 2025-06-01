import React from 'react'
import history from '../history'
import { ExtractPathVariables, RedirectTo } from './interfaces/index.types'
import { StudentDisability } from '@constants'
import { UserRoles } from '@constants'
import { TopicName } from '@constants'

export const extractPathVariables: ExtractPathVariables = (endpoint) => {
  const regex = /\{([^}]+)\}/g // Matches `{variableName}`
  const variables = {}

  let match

  if (!endpoint) {
    return {}
  }

  while ((match = regex.exec(endpoint)) !== null) {
    variables[match[1]] = '' // Initialize with empty string or default value
  }

  return variables
}

// TODO: re-define this function
export const redirectTo: RedirectTo = (route) => () => {
  history.push(route)
}

export const textToSpeech = (text: string) => {
  // If already speaking, stop it
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel()
    return
  }

  const textReplaced = text
    .replace(/-/g, ' menos ')
    .replace(/\+/g, ' más ')
    .replace(/\*/g, ' por ')
    .replace(/\//g, ' entre ')

  const message = new SpeechSynthesisUtterance(textReplaced)
  message.lang = 'es-MX'
  window.speechSynthesis.speak(message)
}

export const translate = (word: string) => {
  switch (word) {
    case StudentDisability.VISUAL:
      return 'Visual'
    case StudentDisability.HEARING:
      return 'Auditiva'
    case StudentDisability.MOTOR:
      return 'Motora'

    case UserRoles.ADMIN:
      return 'Administrador'
    case UserRoles.TEACHER:
      return 'Profesor'
    case UserRoles.STUDENT:
      return 'Estudiante'

    case TopicName.BASIC:
      return 'Básico'
    case TopicName.INTERMEDIATE:
      return 'Intermedio'
    case TopicName.ADVANCED:
      return 'Avanzado'

    default:
      return 'Indefinid@'
  }
}

export type HandleSpaceEvent = (
  e: React.KeyboardEvent<
    HTMLAnchorElement | HTMLDivElement | HTMLLIElement | HTMLButtonElement
  >,
) => void

export const handleSpaceEvent: HandleSpaceEvent = (e) => {
  if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Enter') {
    e.preventDefault()
    e.currentTarget.click() // Simulate the same behavior as clicking
  }
}
