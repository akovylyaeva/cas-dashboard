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

  initializeReport({
    loadedReport,
  }: {
    loadedReport: DailyReport,
  }) {
    this._report = loadedReport
  }

  get report() {
    return this._report
  }

  get date() {
    return this._report.date
  }

  setDate({
    date,
  }: {
    date: string,
  }) {
    this._report.date = date
  }


  setCycleDay({
    cycleDay,
  }: {
    cycleDay: string,
  }) {
    this._report.cycleDay = this.parseNumber(cycleDay)
  }

  setWeight({
    weight,
  }: {
    weight: string,
  }) {
    this._report.weight = this.parseNumber(weight)
  }

  setCalories({
    calories,
  }: {
    calories: string,
  }) {
    this._report.calories = this.parseNumber(calories)
  }

  setProtein({
    protein,
  }: {
    protein: string,
  }) {
    this._report.protein = this.parseNumber(protein)
  }

  setFat({
    fat,
  }: {
    fat: string,
  }) {
    this._report.fat = this.parseNumber(fat)
  }

  setCarbs({
    carbs,
  }: {
    carbs: string,
  }) {
    this._report.carbs = this.parseNumber(carbs)
  }

  setSteps({
    steps,
  }: {
    steps: string,
  }) {
    this._report.steps = this.parseNumber(steps)
  }

  setSleepStart({
    sleepStart,
  }: {
    sleepStart: string,
  }) {
    this._report.sleepStart = sleepStart === `` ? null : sleepStart
  }

  setSleepEnd({
    sleepEnd,
  }: {
    sleepEnd: string,
  }) {
    this._report.sleepEnd = sleepEnd === `` ? null : sleepEnd
  }

  setComment({
    comment,
  }: {
    comment: string,
  }) {
    this._report.comment = comment
  }

  private parseNumber(value: string) {
    return value === "" ? null : Number(value)
  }
}
