import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { DailyReportContent } from './DailyReportContent'
import { DailyReportStateContext } from './state/DailyReportStateContext'
import { dailyReportsRepository } from './api/DailyReportsRepository'

export const DailyReportContainer = observer(() => {
  const dailyReportState = useContext(DailyReportStateContext)

  useEffect(() => {
    loadReport()
  }, [
    dailyReportState.date
  ])

  return <DailyReportContent onSubmit={createReportAsync} />

  async function createReportAsync() {
    await dailyReportsRepository.create({
      report: dailyReportState.report,
    })

    dailyReportState.setSaved()
  }

  async function loadReport() {
    const report = await dailyReportsRepository.getByDate({
      date: dailyReportState.date,
    })

    if (report) {
      dailyReportState.initializeReport({
        loadedReport: report,
      })

      dailyReportState.setSaved()

      return
    }

    dailyReportState.resetReport()
  }
})
