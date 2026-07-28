import { createContext } from 'react'
import { WeightState } from './WeightState'

export const WeightStateContext = createContext<WeightState>(null as unknown as WeightState)
