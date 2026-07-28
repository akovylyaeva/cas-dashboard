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
    return this.isPositiveOrEmpty(this._report.weight)
  }

  get isCycleDayValid() {
    return this.isPositiveOrEmpty(this._report.cycleDay)
  }

  get isCaloriesValid() {
    return this.isPositiveOrEmpty(this._report.calories)
  }

  get isProteinValid() {
    return this.isPositiveOrEmpty(this._report.protein)
  }

  get isFatValid() {
    return this.isPositiveOrEmpty(this._report.fat)
  }

  get isCarbsValid() {
    return this.isPositiveOrEmpty(this._report.carbs)
  }

  get isStepsValid() {
    return this.isPositiveOrEmpty(this._report.steps)
  }

  get isSleepValid() {
    return (this._report.sleepStart === null && this._report.sleepEnd === null)
      || (this._report.sleepStart !== null && this._report.sleepEnd !== null)
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

  setNumberField({
    field,
    value,
  }: {
    field: keyof Pick<
      DailyReportType,
      'weight' |
      'cycleDay' |
      'calories' |
      'protein' |
      'fat' |
      'carbs' |
      'steps'
    >,
    value: string,
  }) {
    this._report[field] = value === '' ? null : Number(value)
    this.resetIsSaved()
  }

  setTimeField({
    field,
    value,
  }: {
    field: keyof Pick<DailyReportType, 'sleepStart' | 'sleepEnd'>,
    value: string,
  }) {
    this._report[field] = value === '' ? null : value
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

  private isPositiveOrEmpty(value: number | null) {
    return value === null || value > 0
  }
}
