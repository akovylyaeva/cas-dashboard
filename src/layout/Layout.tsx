import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/Sidebar"

export function Layout() {
  return (
    <div>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
