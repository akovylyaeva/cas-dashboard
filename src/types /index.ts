export type DailyReport = {
  id: string,
  date: string,
  
  cycleDay: number | null,

  weight: number | null,

  calories: number | null,
  protein: number | null,
  fat: number | null,
  carbs: number | null,

  steps: number | null,

  sleepStart: string | null,
  sleepEnd: string | null,

  comment: string,
}