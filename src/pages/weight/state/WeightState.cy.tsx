import { WeightState } from './WeightState'

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

describe('WeightState', () => {
  describe('Initialization', initializationTests)
})

function initializationTests() {
  let weightState: WeightState

  beforeEach(() => {
    weightState = new WeightState()
  })

  it(`
  GIVEN a new WeightState
  WHEN not initialize
  SHOULD have empty history
  `, () => {
    expect(weightState.history).to.deep.equal([])
    expect(weightState.currentWeight).to.eq(null)
    expect(weightState.currentDifference).to.eq(0)
  })

  it(`
  GIVEN a new WeightState
  WHEN initialize data
  SHOULD calculate difference between weights
  `, () => {

    weightState.initialize({
      loadedHistory: HISTORY_DATA
    })

    expect(weightState.history).to.deep.equal([
      {
        id: '3',
        date: '2026-01-10',
        weight: 69.2,
        difference: 0.7,
      },
      {
        id: '2',
        date: '2026-01-05',
        weight: 68.5,
        difference: -1.5,
      },
      {
        id: '1',
        date: '2026-01-01',
        weight: 70.0,
        difference: 0,
      },
    ])
  })

  it(`
  GIVEN initialized weight history
  WHEN current weight and difference requested
  SHOULD return correct values
  `, () => {

    weightState.initialize({
      loadedHistory: HISTORY_DATA
    })

    expect(weightState.currentWeight).to.eq(69.2)
    expect(weightState.currentDifference).to.eq(0.7)
  })
}
