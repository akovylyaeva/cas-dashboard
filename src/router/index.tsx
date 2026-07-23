import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { DailyReportPage } from "../pages/daily-report/DailyReportPage"
import { Sleep } from "../pages/sleep/Sleep"
import { Weight } from "../pages/weight/Weight"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DailyReportPage />,
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
