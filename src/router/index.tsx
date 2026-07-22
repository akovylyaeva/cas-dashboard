import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Dashboard } from "../pages/dashboard/Dashboard"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
])
