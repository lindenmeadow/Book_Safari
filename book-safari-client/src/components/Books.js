import React, {Component} from 'react';
import BookLogForm from './BookLogForm';
import LogEntry from './LogEntry';
import {connect} from 'react-redux';
import {getBooks} from '../actions/BookActions'
import {deleteBook} from '../actions/BookActions'
//import { history } from '../index';


class Books extends Component {
    constructor(props) {
        super(props);
    }

   componentDidMount() {
        this.props.onGet();
    } 

    render() {
        return (
        
                 <div>
                    <h1 className="log-head">Reading Log</h1>
                    <BookLogForm />
                    <div className="list">
                        {
                            this.props.books.map(book => {
                                return (
                                    <LogEntry
                                        key={book.id}
                                        book={book}
                                        onDelete={this.props.onDelete}
                                        
                                    />
                                )
                            })
                        }
                    </div>
                    
                </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => {
            dispatch(getBooks());
        },

        onDelete: (id) => {
            dispatch(deleteBook(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);


/*
import React, {Component} from 'react';
import BookLogForm from './BookLogForm';
import BookList from './BookList';
import {connect} from 'react-redux';
import {getBooks} from '../actions/BookLogActions'


class Books extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            
                 <div>
                    <h1 className="log-head">Reading Log</h1>
                    <BookLogForm />
                    <BookList />
                </div>
                  
        )
    }
    
}

export default connect(null, {getBooks})(Books);
*/
