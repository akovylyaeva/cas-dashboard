import './DailyReportContent.scss'

import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { DailyReportStateContext } from './state/DailyReportStateContext'

export const DailyReportContent = observer(() => {
  const dailyReportState = useContext(DailyReportStateContext)

  const {
    date,
    cycleDay,
    weight,
    calories,
    protein,
    fat,
    carbs,
    steps,
    sleepStart,
    sleepEnd,
    comment,
  } = dailyReportState.report

  const handleSave = () => {
    console.log('saved!')
  }

  return (
    <>
        <h1>Daily Report</h1>

        <label htmlFor='date'>
            Date
        </label>

        <input
            id='date'
            type='date'
            value={date}
            onChange={(event) =>
              dailyReportState.setDate({
                date: event.target.value,
              })
            }
        />

        <label htmlFor='cycleDay'>
          Cycle Day
        </label>

        <input
          id='cycleDay'
          type='number'
          value={cycleDay ?? ``}
          onChange={(event) =>
            dailyReportState.setCycleDay({
              cycleDay: event.target.value,
            })
          }
        />

        <label htmlFor='weight'>
          Weight
        </label>

        <input
          id='weight'
          type='number'
          value={weight ?? ``}
          onChange={(event) =>
            dailyReportState.setWeight({
              weight: event.target.value,
            })
          }
        />

        <div>
          <label htmlFor='calories'>
            Calories
          </label>

          <input
            id='calories'
            type='number'
            value={calories ?? ``}
            onChange={(event) =>
              dailyReportState.setCalories({
                calories: event.target.value,
              })
            }
          />

          <label htmlFor='protein'>
            Protein
          </label>

          <input
            id='protein'
            type='number'
            value={protein ?? ``}
            onChange={(event) =>
              dailyReportState.setProtein({
                protein: event.target.value,
              })
            }
          />

          <label htmlFor='fat'>
            Fat
          </label>

          <input
            id='fat'
            type='number'
            value={fat ?? ``}
            onChange={(event) =>
              dailyReportState.setFat({
                fat: event.target.value,
              })
            }
          />

          <label htmlFor='carbs'>
            Carbs
          </label>

          <input
            id='carbs'
            type='number'
            value={carbs ?? ``}
            onChange={(event) =>
              dailyReportState.setCarbs({
                carbs: event.target.value,
              })
            }
          />
        </div>

        <label htmlFor='steps'>
          Steps
        </label>

        <input
          id='steps'
          type='number'
          value={steps ?? ``}
          onChange={(event) =>
            dailyReportState.setSteps({
              steps: event.target.value,
            })
          }
        />

      <div>
        <label htmlFor='sleepStart'>
          Sleep Start
        </label>

        <input
          id='sleepStart'
          type='time'
          value={sleepStart ?? ``}
          onChange={(event) =>
            dailyReportState.setSleepStart({
              sleepStart: event.target.value,
            })
          }
        />

        <label htmlFor='sleepEnd'>
          Sleep End
        </label>

        <input
          id='sleepEnd'
          type='time'
          value={sleepEnd ?? ``}
          onChange={(event) =>
            dailyReportState.setSleepEnd({
              sleepEnd: event.target.value,
            })
          }
        />
      </div>


      <label htmlFor='comment'>
        Comment
      </label>

      <input
        id='comment'
        type='string'
        value={comment}
        onChange={(event) =>
          dailyReportState.setComment({
            comment: event.target.value,
          })
        }
      />

      <button onClick={handleSave}>
        Save
      </button>
    </>
  )
})
