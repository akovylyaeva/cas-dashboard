import type { WeightItemType } from '../../../../types'
import { WeightState } from '../../state/WeightState'
import { WeightStateContext } from '../../state/WeightStateContext'
import { WeightTable } from './WeightTable'

const HISTORY_DATA = [
  {
    id: '3',
    date: '2026-01-10',
    weight: 69.2,
  },
  {
    id: '2',
    date: '2026-01-05',
    weight: 68.5,
  },
  {
    id: '1',
    date: '2026-01-01',
    weight: 70.0,
  },
]

describe('WeightTable', () => {
  it(`
  GIVEN weight page
  WHEN weight page
  THEN render weight table
  `, () => {
    mountComponent({
      history: HISTORY_DATA,
    })

    cy
      .getByData('weight-table')
      .should('exist')
  })

  it(`
  GIVEN weight page
  WHEN there is no data
  THEN render weight table with no data message
  `, () => {
    mountComponent({
      history: [],
    })

    cy
      .getByData('weight-table-no-data')
      .should('exist')
      .should('have.text', 'No weight data')
  })

  it(`
  GIVEN weight page
  WHEN there is data
  THEN render valid data for all elements in column
  `, () => {
    mountComponent({
      history: HISTORY_DATA,
    })

    cy
      .getByData('weight-table-column-date')
      .first()
      .should('have.text', '2026-01-10')

    cy
      .getByData('weight-table-column-weight')
      .first()
      .should('have.text', '69.2')

    cy
      .getByData('weight-table-column-difference')
      .first()
      .should('have.text', '+0.7')
  })

})

function mountComponent({
  history,
}: {
  history: Omit<WeightItemType, 'difference'>[],
}) {
  const weightState = new WeightState()

  weightState.initialize({
    loadedHistory: history,
  })

  cy
    .mount(
      <WeightStateContext.Provider value={weightState}>
        <WeightTable />
      </WeightStateContext.Provider>,
    )
}
