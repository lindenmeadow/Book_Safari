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
