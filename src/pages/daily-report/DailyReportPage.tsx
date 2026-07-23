import { useMemo } from "react"
import { DailyReportContent } from "./DailyReportContent"
import { DailyReportState } from "./state/DailyReportState"
import { DailyReportStateContext } from './state/DailyReportStateContext'

export function DailyReportPage() {
  const dailyReportState = useMemo(
    () => new DailyReportState(),
    [],
  )

  return (
    <DailyReportStateContext.Provider value={dailyReportState}>
      <DailyReportContent />
    </DailyReportStateContext.Provider>
  )
}
