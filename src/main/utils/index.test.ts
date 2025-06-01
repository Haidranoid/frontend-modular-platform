jest.mock('../history', () => ({
  __esModule: true,
  default: {
    push: jest.fn(),
  },
}))

import React from 'react'
import { render, screen } from '@test/utils/testing-library'
import history from '../history'
import { StudentDisability } from '@constants'
import { UserRoles } from '@constants'
import { TopicName } from '@constants'
import Endpoints from '@lib/http-client/Endpoints'
import {
  translate,
  extractPathVariables,
  redirectTo,
  handleSpaceEvent,
  textToSpeech,
} from './index'

describe('Utils functions', () => {
  describe('translate', () => {
    it('should translate student disabilities', () => {
      expect(translate(StudentDisability.VISUAL)).toBe('Visual')
      expect(translate(StudentDisability.HEARING)).toBe('Auditiva')
      expect(translate(StudentDisability.MOTOR)).toBe('Motora')
    })

    it('should translate user roles', () => {
      expect(translate(UserRoles.ADMIN)).toBe('Administrador')
      expect(translate(UserRoles.TEACHER)).toBe('Profesor')
      expect(translate(UserRoles.STUDENT)).toBe('Estudiante')
    })

    it('should translate topic names', () => {
      expect(translate(TopicName.BASIC)).toBe('Básico')
      expect(translate(TopicName.INTERMEDIATE)).toBe('Intermedio')
      expect(translate(TopicName.ADVANCED)).toBe('Avanzado')
    })

    it('should return "Indefinid@" for unknown input', () => {
      expect(translate('UNKNOWN')).toBe('Indefinid@')
    })
  })

  describe('extractPathVariables', () => {
    it('should return an empty object for endpoints without path variables', () => {
      expect(extractPathVariables(Endpoints.LOGIN)).toEqual({})
      expect(extractPathVariables(Endpoints.GET_USERS)).toEqual({})
    })

    it('should extract a single variable from the endpoint', () => {
      expect(extractPathVariables(Endpoints.GET_ONE_USER)).toEqual({ userId: '' })
      expect(extractPathVariables(Endpoints.GET_SINGLE_RESOURCE)).toEqual({ id: '' })
    })

    it('should extract multiple variables if present', () => {
      const customEndpoint = 'http://localhost:8080/api/v1/{category}/{itemId}'
      expect(extractPathVariables(customEndpoint)).toEqual({ category: '', itemId: '' })
    })

    it('should return an empty object if input is empty or nullish', () => {
      expect(extractPathVariables('')).toEqual({})
      expect(extractPathVariables(null)).toEqual({})
    })
  })

  describe('redirectTo', () => {
    it('should call history.push with the provided route', () => {
      const route = '/dashboard'
      const redirectFn = redirectTo(route)

      redirectFn()

      expect(history.push).toHaveBeenCalledWith(route)
    })
  })

  describe('handleSpaceEvent', () => {
    it('should prevent default and trigger click on space key', () => {
      const preventDefault = jest.fn()
      const click = jest.fn()

      const mockEvent = {
        key: ' ',
        preventDefault,
        currentTarget: { click },
      } as unknown as React.KeyboardEvent<HTMLDivElement>

      handleSpaceEvent(mockEvent)

      expect(preventDefault).toHaveBeenCalled()
      expect(click).toHaveBeenCalled()
    })

    it('should prevent default and trigger click on spacebar key', () => {
      const preventDefault = jest.fn()
      const click = jest.fn()

      const mockEvent = {
        key: 'Spacebar',
        preventDefault,
        currentTarget: { click },
      } as unknown as React.KeyboardEvent<HTMLDivElement>

      handleSpaceEvent(mockEvent)

      expect(preventDefault).toHaveBeenCalled()
      expect(click).toHaveBeenCalled()
    })

    it('should prevent default and trigger click on enter key', () => {
      const preventDefault = jest.fn()
      const click = jest.fn()

      const mockEvent = {
        key: 'Enter',
        preventDefault,
        currentTarget: { click },
      } as unknown as React.KeyboardEvent<HTMLDivElement>

      handleSpaceEvent(mockEvent)

      expect(preventDefault).toHaveBeenCalled()
      expect(click).toHaveBeenCalled()
    })
  })

  describe('textToSpeech', () => {
    let speakMock: jest.Mock
    let utteranceInstance: { text: string; lang: string }

    beforeAll(() => {
      // Mock speechSynthesis.speak
      speakMock = jest.fn()
      Object.defineProperty(window, 'speechSynthesis', {
        value: { speak: speakMock },
        writable: true,
      })

      // Mock SpeechSynthesisUtterance constructor
      const MockSpeechSynthesisUtterance = function (this: never, text: string) {
        utteranceInstance = { text, lang: '' }
        return utteranceInstance
      }

      Object.defineProperty(window, 'SpeechSynthesisUtterance', {
        value: MockSpeechSynthesisUtterance,
        writable: true,
      })
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('should replace operators and call speechSynthesis.speak with correct utterance', () => {
      textToSpeech('2+2-1*5/10')

      expect(utteranceInstance.text).toBe('2 más 2 menos 1 por 5 entre 10')
      expect(utteranceInstance.lang).toBe('es-MX')
      expect(speakMock).toHaveBeenCalledWith(utteranceInstance)
    })
  })
})
