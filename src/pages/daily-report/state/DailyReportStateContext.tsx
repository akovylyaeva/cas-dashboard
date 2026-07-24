import { createContext } from 'react'
import { DailyReportState } from './DailyReportState'

export const DailyReportStateContext = createContext<DailyReportState>(null as unknown as DailyReportState)