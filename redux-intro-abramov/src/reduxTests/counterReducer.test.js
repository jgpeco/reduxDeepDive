import counterReducer from './counterReducer'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'


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

describe('UI Testing', () => {
    const container = document.body

    test('When rendered, body should display the initialState (0)', () => {
        expect(container.innerText).toEqual(0)
    })

    test('When clicked, listener should be triggered and store should update the state of the app', () => {
        fireEvent.click(container)
        expect(container.innerText).toEqual(1)
    })
})

