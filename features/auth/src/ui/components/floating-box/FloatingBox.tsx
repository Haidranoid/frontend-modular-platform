import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export const FloatingBox: FC<PropsWithChildren> = (props) => {
  return createPortal(props.children, document.body)
}
