import { useMemo } from 'react'
import { WeightState } from './state/WeightState'
import { WeightStateContext } from './state/WeightStateContext'
import { WeightContainer } from './WeightContainer'

export function WeightPage() {
  const weightState = useMemo(
    () => new WeightState(),
    [],
  )

  return (
    <WeightStateContext.Provider value={weightState}>
      <WeightContainer />
    </WeightStateContext.Provider>
  )
}
