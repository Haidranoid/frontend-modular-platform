import { FC, ReactNode } from 'react'

interface NavigationMenuProps {
  children: ReactNode
}

const NavigationMenu: FC<NavigationMenuProps> = ({ children }) => {
  return (
    <div>
      <div tabIndex={-1}>{children}</div>
    </div>
  )
}

export default NavigationMenu
