import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addBook} from '../actions/BookActions';

import {Form, Col, Button, Accordion, Card} from 'react-bootstrap';

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
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        window.alert("New entry added.")
        this.props.addBook(this.state)
        this.setState({
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
        })
    }

    render() {
        
        return (
            <Accordion>
                <Card>
                    <Card.Header style={{textAlign:'center'}}>
                        <Accordion.Toggle className='form-toggle' as={Button} variant="link" eventKey="0">
                        Create New Log Entry
                        <br />
                        </Accordion.Toggle>
                    </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form className="entry-form" onSubmit={this.handleSubmit}>
                                <p>To close this form, click the "Create New Log Entry" button again.</p>
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
                                
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default connect(null, {addBook})(BookLogForm);
