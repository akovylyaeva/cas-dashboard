import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { DailyReportPage } from '../pages/daily-report/DailyReportPage'
import { Sleep } from '../pages/sleep/Sleep'
import { WeightPage } from '../pages/weight/WeightPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DailyReportPage />,
      },
      {
        path: 'weight',
        element: <WeightPage />,
      },
      {
        path: 'sleep',
        element: <Sleep />,
      },
    ],
  },
])
