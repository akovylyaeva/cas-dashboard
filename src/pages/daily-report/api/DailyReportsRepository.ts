import { supabase } from '../../../common/api/supabase'
import type { DailyReport } from '../../../types'

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

    return data as DailyReport | null
  }
}

export const dailyReportsRepository = new DailyReportsRepository()
