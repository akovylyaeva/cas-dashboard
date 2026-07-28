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
    dailyReportState.report.date
  ])

  return <DailyReportContent onSubmit={createReportAsync} />

  async function createReportAsync() {
    dailyReportState.setIsSaving()
    dailyReportState.setIsTriedToSubmit()

    if (!dailyReportState.isValid) {
      dailyReportState.resetIsSaving()
      return
    }

    try {
      await dailyReportsRepository.create({
        report: dailyReportState.report,
      })

      dailyReportState.setIsSaved()
    }
    finally {
      dailyReportState.resetIsSaving()
      dailyReportState.resetIsTriedToSubmit()
    }
  }

  async function loadReport() {
    const report = await dailyReportsRepository.getByDate({
      date: dailyReportState.report.date,
    })

    if (report) {
      dailyReportState.initializeReport({
        loadedReport: report,
      })

      dailyReportState.setIsSaved()

      return
    }

    dailyReportState.resetReport()
  }
})
