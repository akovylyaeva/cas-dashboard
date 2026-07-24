import { useMemo } from 'react'
import { DailyReportState } from './state/DailyReportState'
import { DailyReportStateContext } from './state/DailyReportStateContext'
import { DailyReportContainer } from './DailyReportContainer'

export function DailyReportPage() {
  const dailyReportState = useMemo(
    () => new DailyReportState(),
    [],
  )

  return (
    <DailyReportStateContext.Provider value={dailyReportState}>
      <DailyReportContainer />
    </DailyReportStateContext.Provider>
  )
}
