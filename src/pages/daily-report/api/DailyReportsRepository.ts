import { supabase } from '../../../common/api/supabase'
import type { DailyReportType } from '../../../types'

export class DailyReportsRepository {

  async getByDate({
    date,
  }: {
    date: string,
  }) {
    const {
      data,
      error,
    } = await supabase
      .from('daily_reports')
      .select('*')
      .eq('date', date)
      .maybeSingle()

    if (error) {
      throw error
    }

    return data as DailyReportType | null
  }

  async create({
    report,
  }: {
    report: DailyReportType,
  }) {
    const {
      error,
    } = await supabase
      .from("daily_reports")
      .upsert(
        {
          id: report.id || undefined,

          date: report.date,

          cycle_day: report.cycleDay,

          weight: report.weight,

          calories: report.calories,
          protein: report.protein,
          fat: report.fat,
          carbs: report.carbs,

          steps: report.steps,

          sleep_start: report.sleepStart,
          sleep_end: report.sleepEnd,

          comment: report.comment,
        },
        {
          onConflict: "date",
        },
      )

    if (error) {
      throw error
    }
  }
}

export const dailyReportsRepository = new DailyReportsRepository()
