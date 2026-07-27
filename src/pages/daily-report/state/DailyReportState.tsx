import { makeAutoObservable } from 'mobx'
import type { DailyReportType } from '../../../types'

const EMPTY_REPORT: DailyReportType = {
  id: '',
  date: '',
  weight: null,
  cycleDay: null,
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

  private _isSaving = false
  private _isTriedToSubmit = false
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

  get isSaving() {
    return this._isSaving
  }

  get isTriedToSubmit() {
    return this._isTriedToSubmit
  }

  get isSaved() {
    return this._isSaved
  }

  get isWeightValid() {
    return this._report.weight === null || this._report.weight > 0
  }

  get isCycleDayValid() {
    return this._report.cycleDay === null || this._report.cycleDay > 0
  }

  get isCaloriesValid() {
    return this._report.calories === null || this._report.calories > 0
  }

  get isProteinValid() {
    return this._report.protein === null || this._report.protein > 0
  }

  get isFatValid() {
    return this._report.fat === null || this._report.fat > 0
  }

  get isCarbsValid() {
    return this._report.carbs === null || this._report.carbs > 0
  }

  get isStepsValid() {
    return this._report.steps === null || this._report.steps > 0
  }

  get isSleepValid() {
    return (this._report.sleepStart && this._report.sleepEnd)
      || (!this._report.sleepStart && !this._report.sleepEnd)
  }

  get isValid() {
    return (
      this.isWeightValid &&
      this.isCycleDayValid &&
      this.isCaloriesValid &&
      this.isProteinValid &&
      this.isFatValid &&
      this.isCarbsValid &&
      this.isStepsValid &&
      this.isSleepValid
    )
  }

  get errors() {
    return {
      isWeightError: !this.isWeightValid && this._isTriedToSubmit,
      isCycleDayError: !this.isCycleDayValid && this._isTriedToSubmit,
      isCaloriesError: !this.isCaloriesValid && this._isTriedToSubmit,
      isProteinError: !this.isProteinValid && this._isTriedToSubmit,
      isFatError: !this.isFatValid && this._isTriedToSubmit,
      isCarbsError: !this.isCarbsValid && this._isTriedToSubmit,
      isStepsError: !this.isStepsValid && this._isTriedToSubmit,
      isSleepError: !this.isSleepValid && this._isTriedToSubmit,
    }
  }

  setDate({
    date,
  }: {
    date: string,
  }) {
    this._report.date = date
    this.resetIsSaved()
  }

  setWeight({
    weight,
  }: {
    weight: string,
  }) {
    this._report.weight = this.parseNumber(weight)
    this.resetIsSaved()
  }

  setCycleDay({
    cycleDay,
  }: {
    cycleDay: string,
  }) {
    this._report.cycleDay = this.parseNumber(cycleDay)
    this.resetIsSaved()
  }

  setCalories({
    calories,
  }: {
    calories: string,
  }) {
    this._report.calories = this.parseNumber(calories)
    this.resetIsSaved()
  }

  setProtein({
    protein,
  }: {
    protein: string,
  }) {
    this._report.protein = this.parseNumber(protein)
    this.resetIsSaved()
  }

  setFat({
    fat,
  }: {
    fat: string,
  }) {
    this._report.fat = this.parseNumber(fat)
    this.resetIsSaved()
  }

  setCarbs({
    carbs,
  }: {
    carbs: string,
  }) {
    this._report.carbs = this.parseNumber(carbs)
    this.resetIsSaved()
  }

  setSteps({
    steps,
  }: {
    steps: string,
  }) {
    this._report.steps = this.parseNumber(steps)
    this.resetIsSaved()
  }

  setSleepStart({
    sleepStart,
  }: {
    sleepStart: string,
  }) {
    this._report.sleepStart = sleepStart === '' ? null : sleepStart
    this.resetIsSaved()
  }

  setSleepEnd({
    sleepEnd,
  }: {
    sleepEnd: string,
  }) {
    this._report.sleepEnd = sleepEnd === '' ? null : sleepEnd
    this.resetIsSaved()
  }

  setComment({
    comment,
  }: {
    comment: string,
  }) {
    this._report.comment = comment
    this.resetIsSaved()
  }

  resetReport() {
    this._report = {
      ...EMPTY_REPORT,
      date: this._report.date,
    }
  }

  setIsSaving() {
    this._isSaving = true
  }

  resetIsSaving() {
    this._isSaving = false
  }

  setIsTriedToSubmit() {
    this._isTriedToSubmit = true
  }

  resetIsTriedToSubmit() {
    this._isTriedToSubmit = false
  }

  setIsSaved() {
    this._isSaved = true
  }

  resetIsSaved() {
    this._isSaved = false
  }

  private parseNumber(value: string) {
    return value === '' ? null : Number(value)
  }
}
