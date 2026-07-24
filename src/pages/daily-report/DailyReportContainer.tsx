import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { DailyReportContent } from './DailyReportContent'
import { DailyReportStateContext } from './state/DailyReportStateContext'
import { dailyReportsRepository } from './api/DailyReportsRepository'

export const DailyReportContainer = observer(() => {
  const dailyReportState = useContext(DailyReportStateContext)

  useEffect(() => {
    loadReport()
  }, [dailyReportState])

  return <DailyReportContent />

  async function loadReport() {
    const report = await dailyReportsRepository.getByDate({
      date: dailyReportState.date,
    })

    if (report) {
      dailyReportState.initializeReport({
        loadedReport: report,
      })
    }
  }
})
