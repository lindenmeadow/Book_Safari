import React, { Component, useState } from 'react';
import {connect} from 'react-redux';
import {addBook} from '../actions/BookFormActions';

import {Form, Col, Button} from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.css';

import '../App.css'

class BookLogForm extends Component {
    state = {
        title: '',
        author: '',
        pages: '',
        date_finished: '',
        genre: '',
        genre_rationale: '',
        characters: '',
        problem: '',
        solution: '',
        words_learned: '',
        something_learned: '',
        question: ''
    }

    

    handleChange = e => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addBook(this.state)
    }

    render() {
        return (
            <Form className="entry-form" onSubmit={this.handleSubmit}>
                <h2>Add a Log Entry</h2>
                <Form.Group>
                
                <Form.Row>
                    <Col>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control required type='text' value={this.state.title} onChange={this.handleChange} name="title" />
                    </Col>
                    <Col>
                    <Form.Label>Author:</Form.Label>
                    <Form.Control required type='text' value={this.state.author} onChange={this.handleChange} name="author" />
                    </Col>
                    <Col>
                    <Form.Label>Number of Pages:</Form.Label>
                    <Form.Control required type='number' value={this.state.pages} onChange={this.handleChange} name="pages" />
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col>
                    <Form.Label>Date Finished:</Form.Label>
                    <Form.Control required type='date' value={this.state.date_finished} onChange={this.handleChange} name="date_finished" />
                    </Col>
                    <Col>
                    <Form.Label>Genre:</Form.Label>
                    <Form.Control required type='text' value={this.state.genre} onChange={this.handleChange} name="genre" />
                    </Col>
                </Form.Row>

                <Form.Label>How You Know It Belongs to That Genre:</Form.Label>
                <Form.Control required input type='text' value={this.state.genre_rationale} onChange={this.handleChange} name="genre_rationale" />
                
                <Form.Label>Main Characters:</Form.Label>
                <Form.Control required type='text' value={this.state.characters} onChange={this.handleChange} name="characters" />
                
                <Form.Label>Main Problem:</Form.Label>
                <Form.Control required type='text' value={this.state.problem} onChange={this.handleChange} name="problem" />
                
                <Form.Label>Solution to the Problem:</Form.Label>
                <Form.Control required type='text' value={this.state.solution} onChange={this.handleChange} name="solution" />
                
                <Form.Label>2 Words You Learned:</Form.Label>
                <Form.Control required type='text' value={this.state.words_learned} onChange={this.handleChange} name="words_learned" />
                
                <Form.Label>Something You Learned:</Form.Label>
                <Form.Control required type='text' value={this.state.something_learned} onChange={this.handleChange} name="something_learned" />
                
                <Form.Label>Question You Have about This Book:</Form.Label>
                <Form.Control required type='text' value={this.state.question} onChange={this.handleChange} name="question" />
                <br />
                <Button variant="secondary" type="submit">Add Log Entry</Button>
                </Form.Group>
            </Form>
            
        )
    }
}

export default connect(null, {addBook})(BookLogForm);