import './Layout.scss'

import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/Sidebar"
import { Header } from "../components/header/Header"

export function Layout() {
  return (
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        <Header />

        <main className='main'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
