export const addBook = book => {
    return dispatch => {
        fetch('http://127.0.0.1:3000/books', {
            method: 'POST',
            body: JSON.stringify(book),
            headers: {'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(book => dispatch({type: 'ADD_BOOK', payload: book}))
    }
}

export const getBooks = () => {
    return dispatch => {
        fetch(`http://localhost:3000/books`)
        .then(resp => resp.json())
        .then(books => dispatch({type: 'GET_BOOKS', payload: books}))
    }
}

    export const updateBook = book => {
        return dispatch => {
            fetch(`http://localhost:3000/books/${book.id}`, {
                method: 'PATCH',
                body: JSON.stringify(book),
                headers: {'Content-Type': 'application/json'}
            })
            .then(resp => resp.json())
            .then(book => dispatch({type: 'UPDATE_BOOK', payload: book}))
        }
    }
       
    export const deleteBook = book => {
        return dispatch => {
            fetch(`http://localhost:3000/books/${book.id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            })
            .then(dispatch({type: 'DELETE_BOOK'}))
        } //error message needed, or success status code
    }
