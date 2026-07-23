import './DailyReportContent.scss'

import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { DailyReportStateContext } from './state/DailyReportStateContext'

export const DailyReportContent = observer(() => {
  const dailyReportState = useContext(DailyReportStateContext)

  const {
    date,
    weight,
  } = dailyReportState.report

  return (
    <>
        <h1>Daily Report</h1>

        <label htmlFor="date">
            Date
        </label>

        <input
            id="date"
            type="date"
            value={date}
            onChange={(event) =>
              dailyReportState.setDate({
                date: event.target.value,
              })
            }
        />

        <label htmlFor="weight">
          Weight
        </label>

        <input
          id="weight"
          type="number"
          value={weight ?? ``}
          onChange={(event) =>
            dailyReportState.setWeight({
              weight: event.target.value,
            })
          }
        />
    </>
  )
})
