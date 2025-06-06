import { FC } from 'react'
import { Outlet } from 'react-router'

const NavigationLayout: FC<NavigationMenuProps> = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <Outlet />
    </div>
  )
}

export default NavigationLayout
