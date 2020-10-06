export const BooksReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_BOOKS':
            return action.payload
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'UPDATE_BOOK':
            return [...state, action.payload]
        case 'DELETE_BOOK':
            return [...state, action.payload]
        default:
            return state
    }
}