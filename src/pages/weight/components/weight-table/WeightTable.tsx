
import './WeightTable.scss'

import clsx from 'clsx'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { WeightStateContext } from '../../state/WeightStateContext'

export const WeightTable = observer(() => {
  const weightState = useContext(WeightStateContext)

  return (
    <table
      data-cy='weight-table'
      className='weight-table'
    >
      <thead>
        <tr className='weight-table__head'>
          <th className='weight-table__column-date'>Date</th>
          <th className='weight-table__column-weight'>Weight</th>
          <th className='weight-table__column-difference'>Difference</th>
        </tr>
      </thead>

      <tbody>
        {weightState.history.length !== 0
          ? (
            <>
              {
                weightState.history.map(({ id, date, weight, difference }) => (
                  <tr
                    className='weight-table__column'
                    key={id}
                  >
                    <td
                      data-cy='weight-table-column-date'
                      className='weight-table__column-date'
                    >
                      {date}
                    </td>

                    <td
                      data-cy='weight-table-column-weight'
                      className='weight-table__column-weight'
                    >
                      {weight}
                    </td>

                    <td
                      data-cy='weight-table-column-difference'
                      className='weight-table__column-difference'
                    >
                      <div
                        className={clsx('weight-table__difference-value', {
                          'weight-table__difference-value--smaller': difference < 0,
                          'weight-table__difference-value--same': difference === 0,
                          'weight-table__difference-value--larger': difference > 0,
                        })}
                      >
                        {
                          difference > 0
                            ? `+${difference}`
                            : difference
                        }
                      </div>
                    </td>
                  </tr>
                ))
              }
            </>
          ) : (
            <tr>
              <td
                colSpan={3}
                data-cy='weight-table-no-data'
                className="weight-table__no-data"
              >
                No weight data
              </td>
            </tr>
          )}
      </tbody>
    </table>
  )
})
