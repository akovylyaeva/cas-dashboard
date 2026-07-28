import { observer } from 'mobx-react-lite'
import { WeightContent } from './WeightContent'
import { dailyReportsRepository } from '../daily-report/api/DailyReportsRepository'
import { useContext, useEffect } from 'react'
import { WeightStateContext } from './state/WeightStateContext'

export const WeightContainer = observer(() => {
  const weightState = useContext(WeightStateContext)

  useEffect(() => {
    loadWeightAsync()
  }, [])

  return <WeightContent />

  async function loadWeightAsync() {
    weightState.setIsLoading()

    try {
      const history = await dailyReportsRepository.getWeightHistory()

      weightState.initialize({
        loadedHistory: history,
      })
    }
    finally {
      weightState.resetIsLoading()
    }
  }
})
