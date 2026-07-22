import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Dashboard } from "../pages/dashboard/Dashboard"
import { Sleep } from "../pages/sleep/Sleep"
import { Weight } from "../pages/weight/Weight"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "sleep",
        element: <Sleep />,
      },
      {
        path: "weight",
        element: <Weight />,
      },
    ],
  },
])
