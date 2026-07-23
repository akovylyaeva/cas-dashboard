import { makeAutoObservable } from "mobx"
import type { DailyReport } from "../../../types"

const EMPTY_REPORT: DailyReport = {
  id: ``,
  date: ``,
  cycleDay: null,
  weight: null,
  calories: null,
  protein: null,
  fat: null,
  carbs: null,
  steps: null,
  sleepStart: null,
  sleepEnd: null,
  comment: ``,
}

export class DailyReportState {
  private _report: DailyReport = {
    ...EMPTY_REPORT, 
  }

  constructor() {
    makeAutoObservable(this)

    this._report.date = new Date().toISOString().split("T")[0]
  }

  get report() {
    return this._report
  }

  setDate({
    date,
  }: {
    date: string,
  }) {
    this._report.date = date
  }

  setWeight({
    weight,
  }: {
    weight: string,
  }) {
    this._report.weight = weight === `` ? null : Number(weight)
  }
}