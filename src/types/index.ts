export type DailyReportType = {
  id: string,
  date: string,

  weight: number | null,

  cycleDay: number | null,

  calories: number | null,
  protein: number | null,
  fat: number | null,
  carbs: number | null,

  steps: number | null,

  sleepStart: string | null,
  sleepEnd: string | null,

  comment: string,
}
