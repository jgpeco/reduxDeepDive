import todoApp from './todoReducer'
import deepFreeze from 'deep-freeze'

const initialState = { todos: [], visibilityFilter: 'SHOW_ALL'}

test('ADD_TODO', () => {
    const beforeState = initialState
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'content'
    }
    const afterState = {...initialState, todos: [
        {
            id: 0,
            text: 'content',
            completed: false
        }
    ]}

    deepFreeze(action)
    deepFreeze(beforeState)

    expect(
        todoApp(beforeState, action)
    ).toEqual(afterState)
})

test('TOGGLE_TODO', () => {
    const beforeState = {...initialState, todos: [
        {
            id: 1,
            text: 'content',
            completed: false,
        }
    ]}
    const action = {
        type: 'TOGGLE_TODO',
        id: 1,
    }
    const afterState = {...beforeState, todos: [
        {
            id: 1,
            text: 'content',
            completed: true
        }
    ]}

    deepFreeze(action)
    deepFreeze(beforeState)

    expect(
        todoApp(beforeState, action)
    ).toEqual(afterState)
})

test('SET_VISIBILITY', () => {
    const beforeState = initialState
    const action = {
        type: 'SET_VISIBILITY',
        filter: 'SHOW_SOME'
    }

    const afterState = {...beforeState, visibilityFilter: 'SHOW_SOME'}

    deepFreeze(action)
    deepFreeze(beforeState)

    expect(
        todoApp(beforeState, action)
    ).toEqual(afterState)
})

