import { supabase } from '../../../common/api/supabase'
import type { DailyReportType, WeightItemType } from '../../../types'

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

    if (!data) {
      return null
    }

    const {
      cycle_day,
      sleep_start,
      sleep_end,
      ...report
    } = data

    return {
      ...report,
      cycleDay: cycle_day,
      sleepStart: sleep_start,
      sleepEnd: sleep_end,
    } as DailyReportType
  }

  async create({
    report,
  }: {
    report: DailyReportType,
  }) {
    const {
      error,
    } = await supabase
      .from('daily_reports')
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
          onConflict: 'date',
        },
      )

    if (error) {
      throw error
    }
  }

  async getWeightHistory() {
    const {
      data,
      error
    } = await supabase
      .from('daily_reports')
      .select(`
        id,
        date,
        weight
      `)
      .not('weight', 'is', null)
      .order('date', {
        ascending: false,
      })

    if (error) {
      throw error
    }

    return data as Omit<WeightItemType, 'difference'>[]
  }

}

export const dailyReportsRepository = new DailyReportsRepository()
