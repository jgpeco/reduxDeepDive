import todoReducer from './todoReducer'
import deepFreeze from 'deep-freeze'

test('ADD_TODO', () => {
    const initialState = []
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'content'
    }
    const afterState = [
        {
            id: 0,
            text: 'content',
            completed: false
        }
    ]

    deepFreeze(action)
    deepFreeze(initialState)

    expect(
        todoReducer(initialState, action)
    ).toEqual(afterState)
})

test('TOGGLE_TODO', () => {
    const initialState = [
        {
            id: 1,
            text: 'content',
            completed: false,
        }
    ]
    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
    }
    const afterState = [
        {
            id: 1,
            text: 'content',
            completed: true
        }
    ]

    deepFreeze(action)
    deepFreeze(initialState)

    expect(
        todoReducer(initialState, action)
    ).toEqual(afterState)
})