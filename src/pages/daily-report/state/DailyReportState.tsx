import { makeAutoObservable } from 'mobx'
import type { DailyReportType } from '../../../types'

const EMPTY_REPORT: DailyReportType = {
  id: '',
  date: '',
  cycleDay: null,
  weight: null,
  calories: null,
  protein: null,
  fat: null,
  carbs: null,
  steps: null,
  sleepStart: null,
  sleepEnd: null,
  comment: '',
}

export class DailyReportState {
  private _report: DailyReportType = {
    ...EMPTY_REPORT,
  }

  private _isSaved = false

  constructor() {
    makeAutoObservable(this)

    this._report.date = new Date()
      .toISOString()
      .split('T')[0]
  }

  initializeReport({
    loadedReport,
  }: {
    loadedReport: DailyReportType,
  }) {
    this._report = loadedReport
  }

  get report() {
    return this._report
  }

  get date() {
    return this._report.date
  }

  get isSaved() {
    return this._isSaved
  }

  setDate({
    date,
  }: {
    date: string,
  }) {
    this._report.date = date
    this.setUnsaved()
  }

  setCycleDay({
    cycleDay,
  }: {
    cycleDay: string,
  }) {
    this._report.cycleDay = this.parseNumber(cycleDay)
    this.setUnsaved()
  }

  setWeight({
    weight,
  }: {
    weight: string,
  }) {
    this._report.weight = this.parseNumber(weight)
    this.setUnsaved()
  }

  setCalories({
    calories,
  }: {
    calories: string,
  }) {
    this._report.calories = this.parseNumber(calories)
    this.setUnsaved()
  }

  setProtein({
    protein,
  }: {
    protein: string,
  }) {
    this._report.protein = this.parseNumber(protein)
    this.setUnsaved()
  }

  setFat({
    fat,
  }: {
    fat: string,
  }) {
    this._report.fat = this.parseNumber(fat)
    this.setUnsaved()
  }

  setCarbs({
    carbs,
  }: {
    carbs: string,
  }) {
    this._report.carbs = this.parseNumber(carbs)
    this.setUnsaved()
  }

  setSteps({
    steps,
  }: {
    steps: string,
  }) {
    this._report.steps = this.parseNumber(steps)
    this.setUnsaved()
  }

  setSleepStart({
    sleepStart,
  }: {
    sleepStart: string,
  }) {
    this._report.sleepStart = sleepStart === '' ? null : sleepStart
    this.setUnsaved()
  }

  setSleepEnd({
    sleepEnd,
  }: {
    sleepEnd: string,
  }) {
    this._report.sleepEnd = sleepEnd === '' ? null : sleepEnd
    this.setUnsaved()
  }

  setComment({
    comment,
  }: {
    comment: string,
  }) {
    this._report.comment = comment
    this.setUnsaved()
  }

  resetReport() {
    this._report = {
      ...EMPTY_REPORT,
      date: this._report.date,
    }
  }

  setSaved() {
    this._isSaved = true
  }

  setUnsaved() {
    this._isSaved = false
  }

  private parseNumber(value: string) {
    return value === '' ? null : Number(value)
  }
}
