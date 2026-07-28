import './WeightContent.scss'

import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { WeightStateContext } from './state/WeightStateContext'
import { WeightTable } from './components/weight-table/WeightTable'

export const WeightContent = observer(() => {
  const weightState = useContext(WeightStateContext)

  const diff = weightState.currentDifference

  return (
    <div className='weight'>
      {/* <h1>Weight</h1> */}

      <div className='weight__value'>
        <div className='weight__current'>
          Current weight:
          {' '}
          {weightState.currentWeight ?? '-'}
        </div>

        <div
          className={clsx('weight__difference', {
            'weight__difference--smaller': diff < 0,
            'weight__difference--same': diff === 0,
            'weight__difference--larger': diff > 0,
          })}
        >
          {
            diff > 0
              ? `+${diff}`
              : diff
          }
        </div>
      </div>

      <WeightTable />
    </div>
  )
})
