import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  container: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
  return createPortal(props.children, props.container)
}
