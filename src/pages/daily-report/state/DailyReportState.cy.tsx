import { DailyReportState } from './DailyReportState'

const TODAY_DATE = new Date()
  .toISOString()
  .split('T')[0]

const SLEEP_START = '01:00'
const SLEEP_END = '09:30'

describe('DailyReportState', () => {
  describe('Initialization', initializationTest)
  describe('Setters', settersTest)
  describe('Reset', resetTest)
  describe('Validation', validationTests)
  describe('Saving flag', savingTests)
})

function initializationTest() {
  const dailyReportState = new DailyReportState()

  it(`
  GIVEN a new DailyReportState
  WHEN initialize
  SHOULD have default report values
  `, () => {
    checkExpectedInitialState({
      dailyReportState,
    })
  })
}

function settersTest() {
  const dailyReportState = new DailyReportState()

  it(`
  GIVEN a new DailyReportState
  WHEN report data is set
  SHOULD display new values in the report object
  `, () => {
    setReportData({
      dailyReportState,
    })

    expect(dailyReportState.report.date).to.eq(TODAY_DATE)
    expect(dailyReportState.report.weight).to.eq(57.7)
    expect(dailyReportState.report.cycleDay).to.eq(7)
    expect(dailyReportState.report.calories).to.eq(1900)
    expect(dailyReportState.report.protein).to.eq(100)
    expect(dailyReportState.report.fat).to.eq(60)
    expect(dailyReportState.report.carbs).to.eq(270)
    expect(dailyReportState.report.steps).to.eq(10000)
    expect(dailyReportState.report.sleepStart).to.eq(SLEEP_START)
    expect(dailyReportState.report.sleepEnd).to.eq(SLEEP_END)
    expect(dailyReportState.report.comment).to.eq('This is a comment about my day')
  })
}

function resetTest() {
  const dailyReportState = new DailyReportState()

  it(`
  GIVEN a filled form
  WHEN reset is called
  SHOULD reset report data to default values
  `, () => {
    setReportData({
      dailyReportState,
    })

    dailyReportState.resetReport()

    checkExpectedInitialState({
      dailyReportState,
    })
  })
}

function validationTests() {
  let dailyReportState: DailyReportState

  beforeEach(() => {
    dailyReportState = new DailyReportState()
  })

  it(`
  GIVEN all not valid fields
  WHEN isValid is accessed
  SHOULD return false and all errors should be true
  `, () => {
    setNotValidReportData({
      dailyReportState,
    })

    dailyReportState.setIsTriedToSubmit()

    expect(dailyReportState.isValid).to.be.false

    expect(dailyReportState.errors).to.deep.equal({
      isWeightError: true,
      isCycleDayError: true,
      isCaloriesError: true,
      isProteinError: true,
      isFatError: true,
      isCarbsError: true,
      isStepsError: true,
      isSleepError: true,
    })
  })

  it(`
  GIVEN all valid fields
  WHEN isValid is accessed
  SHOULD return true and all errors should be false
  `, () => {
    setReportData({
      dailyReportState,
    })

    dailyReportState.setIsTriedToSubmit()

    expect(dailyReportState.isValid).to.be.true
    expect(dailyReportState.errors).to.deep.equal({
      isWeightError: false,
      isCycleDayError: false,
      isCaloriesError: false,
      isProteinError: false,
      isFatError: false,
      isCarbsError: false,
      isStepsError: false,
      isSleepError: false,
    })
  })
}

function savingTests() {
  let dailyReportState: DailyReportState

  beforeEach(() => {
    dailyReportState = new DailyReportState()
  })

  it(`
  GIVEN initial isSaving = false
  WHEN setIsSaving and resetIsSaving are triggered
  SHOULD toggle isSaving to true and then back to false
  `, () => {
    expect(dailyReportState.isSaving).to.be.false

    dailyReportState.setIsSaving()
    expect(dailyReportState.isSaving).to.be.true

    dailyReportState.resetIsSaving()
    expect(dailyReportState.isSaving).to.be.false
  })

  it(`
  GIVEN initial isTriedToSubmit = false
  WHEN setIsTriedToSubmit and resetIsTriedToSubmit are triggered
  SHOULD toggle isTriedToSubmit to true and then back to false
  `, () => {
    expect(dailyReportState.isTriedToSubmit).to.be.false

    dailyReportState.setIsTriedToSubmit()
    expect(dailyReportState.isTriedToSubmit).to.be.true

    dailyReportState.resetIsTriedToSubmit()
    expect(dailyReportState.isTriedToSubmit).to.be.false
  })

  it(`
  GIVEN initial isSaved = false
  WHEN setIsSaved and resetIsSaved are triggered
  SHOULD toggle isSaved to true and then back to false
  `, () => {
    expect(dailyReportState.isSaved).to.be.false

    dailyReportState.setIsSaved()
    expect(dailyReportState.isSaved).to.be.true

    dailyReportState.resetIsSaved()
    expect(dailyReportState.isSaved).to.be.false
  })

  it(`
  GIVEN initial isSaved = false
  WHEN field changed
  SHOULD isSaved must became false
  `, () => {
    dailyReportState.setIsSaved()
    expect(dailyReportState.isSaved).to.be.true

    dailyReportState.setNumberField({
      field: 'cycleDay',
      value: '7'
    })

    expect(dailyReportState.isSaved).to.be.false
  })
}

function checkExpectedInitialState({
  dailyReportState,
}: {
  dailyReportState: DailyReportState,
}) {
  expect(dailyReportState.report.id).to.eq('')
  expect(dailyReportState.report.date).to.eq(TODAY_DATE)
  expect(dailyReportState.report.weight).to.eq(null)
  expect(dailyReportState.report.cycleDay).to.eq(null)
  expect(dailyReportState.report.calories).to.eq(null)
  expect(dailyReportState.report.protein).to.eq(null)
  expect(dailyReportState.report.fat).to.eq(null)
  expect(dailyReportState.report.carbs).to.eq(null)
  expect(dailyReportState.report.steps).to.eq(null)
  expect(dailyReportState.report.sleepStart).to.eq(null)
  expect(dailyReportState.report.sleepEnd).to.eq(null)
  expect(dailyReportState.report.comment).to.eq('')
}

function setReportData({
  dailyReportState,
}: {
  dailyReportState: DailyReportState,
}) {
  dailyReportState.setDate({
    date: TODAY_DATE,
  })
  dailyReportState.setNumberField({
    field: 'weight',
    value: '57.7'
  })
  dailyReportState.setNumberField({
    field: 'cycleDay',
    value: '7'
  })
  dailyReportState.setNumberField({
    field: 'calories',
    value: '1900'
  })
  dailyReportState.setNumberField({
    field: 'protein',
    value: '100'
  })
  dailyReportState.setNumberField({
    field: 'fat',
    value: '60'
  })
  dailyReportState.setNumberField({
    field: 'carbs',
    value: '270'
  })
  dailyReportState.setNumberField({
    field: 'steps',
    value: '10000'
  })
  dailyReportState.setTimeField({
    field: 'sleepStart',
    value: SLEEP_START
  })
  dailyReportState.setTimeField({
    field: 'sleepEnd',
    value: SLEEP_END
  })
  dailyReportState.setComment({
    comment: 'This is a comment about my day',
  })
}

function setNotValidReportData({
  dailyReportState,
}: {
  dailyReportState: DailyReportState,
}) {
  dailyReportState.setNumberField({
    field: 'weight',
    value: '-57.7'
  })
  dailyReportState.setNumberField({
    field: 'cycleDay',
    value: '-7'
  })
  dailyReportState.setNumberField({
    field: 'calories',
    value: '-1900'
  })
  dailyReportState.setNumberField({
    field: 'protein',
    value: '-100'
  })
  dailyReportState.setNumberField({
    field: 'fat',
    value: '-60'
  })
  dailyReportState.setNumberField({
    field: 'carbs',
    value: '-270'
  })
  dailyReportState.setNumberField({
    field: 'steps',
    value: '-10000'
  })
  dailyReportState.setTimeField({
    field: 'sleepStart',
    value: SLEEP_START
  })
}
