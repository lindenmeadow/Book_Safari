import React from 'react';
import {useSelector} from 'react-redux';
import LogEntry from './LogEntry'

import '../App.css'

function BookList() {
    let books = useSelector(state => state)

        return (
        
        <div className="entry-list">
            <h2>Your Log Entries</h2>
            <hr />
            <div className="list">
            {books.map((book, index) => {
                return <LogEntry key={index} book={book} />
            })}
            </div>
        </div>
        
    )
}


export default BookList;

/*
import {useDispatch} from 'react-redux';

import {updateBook} from '../actions/BookLogActions'
import {deleteBook} from '../actions/BookLogActions'
*/


/*
const mapStateToProps = state => {
    return {books: state.books}
}

export default connect(mapStateToProps)(BookList);
*/