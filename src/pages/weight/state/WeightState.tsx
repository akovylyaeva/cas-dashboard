import { makeAutoObservable } from 'mobx'
import type { WeightItemType } from '../../../types'

export class WeightState {
  private _history: WeightItemType[] = []

  private _isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  initialize({
    loadedHistory,
  }: {
    loadedHistory: Omit<WeightItemType, 'difference'>[],
  }) {
    this._history = loadedHistory.map((item, index, array) => ({
      ...item,
      difference: index === array.length - 1
        ? 0
        : Number((item.weight - array[index + 1].weight).toFixed(2)),
    }))
  }

  get history() {
    return this._history
  }

  get isLoading() {
    return this._isLoading
  }

  get currentWeight() {
    return this._history[0]?.weight ?? null
  }

  get currentDifference() {
    return this._history[0]?.difference ?? 0
  }

  setIsLoading() {
    this._isLoading = true
  }

  resetIsLoading() {
    this._isLoading = false
  }
}
