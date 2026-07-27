import './Sidebar.scss'

import { NavLink } from 'react-router-dom'
import { navigation } from '../../config/navigation'

export function Sidebar() {
  return (
    <div className='sidebar'>
      <h3>Cas Dashboard</h3>

      <ul className='sidebar__navigation'>
        {navigation.map(({ path, title }) => (
          <li
            key={path}
            className='sidebar__navigation-item'
          >
            <NavLink
              to={path}
              className='sidebar__navigation-link'
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
