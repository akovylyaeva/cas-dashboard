import { NavLink } from "react-router-dom"

export function Sidebar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/weight">Weight</NavLink>
        </li>

        <li>
          <NavLink to="/sleep">Sleep</NavLink>
        </li>
      </ul>
    </nav>
  )
}
