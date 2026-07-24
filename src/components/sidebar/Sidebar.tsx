import './Sidebar.scss'

import { NavLink } from 'react-router-dom'
import { navigation } from '../../config/navigation'

export function Sidebar() {
  return (
    <nav className='sidebar'>
      <ul>
        {navigation.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
