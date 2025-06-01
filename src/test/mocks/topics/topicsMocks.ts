import type { Topic } from '@interfaces/topics/topics.types'
import type { Content } from '@interfaces/content/content.types'
import { TopicName } from '@constants'
import { StudentDisability } from '@constants'
import { MockAxiosResponse } from '@test/interfaces/index.types'
import {
  GetAllTopicsRequestResponse,
  GetResourcesByTopicRequestResponse,
} from '@interfaces/actions/topics/TopicsActions.responses'

export const mockTopicBasic: Topic = {
  id: 1,
  topic: TopicName.BASIC,
  description:
    'Este tema está dirigido a quienes desean aprender los fundamentos de las ecuaciones, incluyendo la resolución de ecuaciones de primer y segundo grado de forma clara y paso a paso.',
}

export const mockTopicIntermediate: Topic = {
  id: 2,
  topic: TopicName.INTERMEDIATE,
  description:
    'Este tema profundiza en la resolución de sistemas de ecuaciones, ecuaciones con fracciones, y problemas con incógnitas en ambos lados. Ideal para reforzar y ampliar tus conocimientos previos.',
}

export const mockTopicAdvanced: Topic = {
  id: 3,
  topic: TopicName.ADVANCED,
  description:
    'En este nivel se abordan ecuaciones cuadráticas completas, factorización avanzada, fórmulas generales y sistemas no lineales. Requiere comprensión sólida de conceptos algebraicos básicos e intermedios.',
}

export const mockSingleContentOne: Content = {
  id: 1,
  url: 'https://sienmat--use1-az4--x-s3.s3express-use1-az4.us-east-1.amazonaws.com/MOTOR/b7de1b10-f28a-40c6-960a-334edfc45359-imagen_2025-05-02_161342451-v3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T080022Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAUSTCPZ3XP6IJTRM4%2F20250512%2Fus-east-1%2Fs3express%2Faws4_request&X-Amz-Expires=900&X-Amz-Signature=df1ee408f9cb7f2226ec927b3d0e0ab3e248176746dc987333a8a62397e6d734',
  title: 'Ecuación de grado 1',
  description:
    'Para resolver la ecuación: -6x - 20 = - 10. Paso 1: sumamos 20 a ambos lados de la ecuación para eliminar el -20 del lado izquierdo, -6x - 20 + 20 = -10 + 20, Al simplificar ambos lados, obtenemos: -6x = 10. Paso 2: Dividimos entre -6 en ambos lados para despejar X. lo que nos lleva a: X = -10/6, simplificandolo la Respuesta final es: X = -5/3.',
  disability: StudentDisability.MOTOR,
  topic: TopicName.BASIC,
}

export const mockSingleContentTwo: Content = {
  id: 2,
  url: 'https://sienmat--use1-az4--x-s3.s3express-use1-az4.us-east-1.amazonaws.com/MOTOR/b7de1b10-f28a-40c6-960a-334edfc45359-imagen_2025-05-02_161342451-v3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250512T080022Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIAUSTCPZ3XP6IJTRM4%2F20250512%2Fus-east-1%2Fs3express%2Faws4_request&X-Amz-Expires=900&X-Amz-Signature=df1ee408f9cb7f2226ec927b3d0e0ab3e248176746dc987333a8a62397e6d734',
  title: 'Ecuación de grado 1',
  description:
    'Para resolver la ecuación: -6x - 20 = - 10. Paso 1: sumamos 20 a ambos lados de la ecuación para eliminar el -20 del lado izquierdo, -6x - 20 + 20 = -10 + 20, Al simplificar ambos lados, obtenemos: -6x = 10. Paso 2: Dividimos entre -6 en ambos lados para despejar X. lo que nos lleva a: X = -10/6, simplificandolo la Respuesta final es: X = -5/3.',
  disability: StudentDisability.MOTOR,
  topic: TopicName.BASIC,
}

export const mockGetAllTopicsSuccess: MockAxiosResponse<GetAllTopicsRequestResponse> = {
  data: { topics: [mockTopicBasic, mockTopicIntermediate, mockTopicAdvanced] },
}

export const mockGetResourcesByTopicSuccess: MockAxiosResponse<GetResourcesByTopicRequestResponse> =
  {
    data: { resources: [mockSingleContentOne, mockSingleContentTwo] },
  }
