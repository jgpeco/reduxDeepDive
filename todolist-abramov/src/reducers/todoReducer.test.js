import todoReducer from './todoReducer'
import deepFreeze from 'deep-freeze'

const initialState = []

test('ADD_TODO', () => {
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