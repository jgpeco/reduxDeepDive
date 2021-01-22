const todoReducer = (state = [], action) => {
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

export default todoReducer