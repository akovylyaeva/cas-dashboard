import './DailyReportContent.scss'

import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { DailyReportStateContext } from './state/DailyReportStateContext'
import { CustomInput } from './components/custom-input/CustomInput'

export const DailyReportContent = observer(({
  onSubmit,
} : {
  onSubmit: () => unknown,
}) => {
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

  return (
    <div className='daily-report'>
        {/* <h1>Daily Report</h1> */}
        <div>Good morning, sunshine!</div>
        <div>Today is a brand new day, full of endless possibilities. I am incredibly proud of myself. No matter what comes my way today, I can handle it. Today, I will do my best. This is my day, and I choose to shine!</div>

        <CustomInput
          label='Date'
          type='date'
          value={date}
          onChange={(event: any) =>
            dailyReportState.setDate({
              date: event.target.value,
            })
          }
        />

        <CustomInput
          label='Weight'
          type='number'
          value={weight ?? ``}
          onChange={(event: any) =>
            dailyReportState.setWeight({
              weight: event.target.value,
            })
          }
        />

        <CustomInput
          label='Cycle Day'
          type='number'
          value={cycleDay ?? ``}
          onChange={(event: any) =>
            dailyReportState.setCycleDay({
              cycleDay: event.target.value,
            })
          }
        />

        <div className='daily-report__macros'>
          <CustomInput
            label='Calories'
            type='number'
            value={calories ?? ``}
            onChange={(event: any) =>
              dailyReportState.setCalories({
                calories: event.target.value,
              })
            }
          />

          <CustomInput
            label='Protein'
            type='number'
            value={protein ?? ``}
            onChange={(event: any) =>
              dailyReportState.setProtein({
                protein: event.target.value,
              })
            }
          />

          <CustomInput
            label='Fat'
            type='number'
            value={fat ?? ``}
            onChange={(event: any) =>
              dailyReportState.setFat({
                fat: event.target.value,
              })
            }
          />

          <CustomInput
            label='Carbs'
            type='number'
            value={carbs ?? ``}
            onChange={(event: any) =>
              dailyReportState.setCarbs({
                carbs: event.target.value,
              })
            }
          />
        </div>

        <CustomInput
          label='Steps'
          type='number'
          value={steps ?? ``}
          onChange={(event: any) =>
            dailyReportState.setSteps({
              steps: event.target.value,
            })
          }
        />

      <div className='daily-report__sleep-time'>
        <CustomInput
          label='Sleep Start'
          type='time'
          value={sleepStart ?? ``}
          onChange={(event: any) =>
            dailyReportState.setSleepStart({
              sleepStart: event.target.value,
            })
          }
        />

        <CustomInput
          label='Sleep End'
          type='time'
          value={sleepEnd ?? ``}
          onChange={(event: any) =>
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

      <button
        className='daily-report__button'
        onClick={onSubmit}
      >
        {
          dailyReportState.isSaved
            ? "Saved"
            : "Save"
        }
      </button>
    </div>
  )
})
