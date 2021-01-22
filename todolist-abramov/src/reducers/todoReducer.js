import { createStore, combineReducers } from 'redux'

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id !== action.id ? todo : { ...todo, completed: !todo.completed })
        default:
            return state
    }
}

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
) => {
    switch(action.type) {
        case 'SET_VISIBILITY':
            return action.filter
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter  
})

export const store = createStore(todoApp)

export default todoApp