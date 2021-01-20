import counterReducer from './counterReducer'

const incrementAction = { type: 'INCREMENT' }
const decrementAction = { type: 'DECREMENT' }
const randomAction = { type: 'RANDOM_ACTION' }

test('If incremented, reducer should return a new incremented state', () => {
    let currentState = 0
    
    expect(
        counterReducer(currentState, incrementAction)
    ).toEqual(1)

    currentState = 1
    expect(
        counterReducer(currentState, incrementAction)
    ).toEqual(2)
})

test('If decremented, reducer should return a new decremented state', () => {
    let currentState = 2
    expect(
        counterReducer(currentState, decrementAction)
    ).toEqual(1)

    currentState = 1
    expect(
        counterReducer(currentState, decrementAction)
    ).toEqual(0)
})

test(`If called with an action that doesn't pertain to the reducer, returns the current state`, () => {
    let currentState = 0
    expect(
        counterReducer(currentState, randomAction)
    ).toEqual(currentState)
})

test(`If called with undefined, should return the initial state`, () => {
    let currentState = undefined
    let initialState = 0
    expect(
        counterReducer(currentState, {})
    ).toEqual(initialState)
})

