import './Dashboard.scss'

import { useState } from "react"

export function Dashboard() {
  const today = new Date().toISOString().split("T")[0]

  const [
    selectedDate,
    setSelectedDate
  ] = useState(today)

  return (
    <>
        <h1>Daily Report</h1>

        <label htmlFor="date">
            Date
        </label>

        <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
        />
    </>
  )
}
