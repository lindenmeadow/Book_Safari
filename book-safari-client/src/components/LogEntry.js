import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {updateBook} from '../actions/BookActions';
import {deleteBook} from '../actions/BookActions';

import {Form, Col, Button, Modal} from 'react-bootstrap';

import '../App.css';


function LogEntry({book}) {
    let dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateLog = () => {
        handleClose()
        dispatch(updateBook(
            {
                ...book,
                title: title,
                author: author,
                pages: pages,
                date_finished: date_finished,
                genre: genre,
                genre_rationale: genre_rationale,
                characters: characters,
                problem: problem,
                solution: solution,
                words_learned: words_learned,
                something_learned: something_learned,
                question: question
            }
        )) 
    } 

    const handleDelete = () => {
        dispatch(deleteBook(book))
        
    } 

    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [pages, setPages] = useState(book.pages)
    const [date_finished, setDate] = useState(book.date_finished)
    const [genre, setGenre] = useState(book.genre)
    const [genre_rationale, setGenre_Rationale] = useState(book.genre_rationale)
    const [characters, setCharacters] = useState(book.characters)
    const [problem, setProblem] = useState(book.problem)
    const [solution, setSolution] = useState(book.solution)
    const [words_learned, setWords] = useState(book.words_learned)
    const [something_learned, setSomething_Learned] = useState(book.something_learned)
    const [question, setQuestion] = useState(book.question)

    
    return(
        <div className='log-entry' key={book.id}>
            <h3>{book.title}</h3>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Number of Pages:</b> {book.pages}</p>
            <p><b>Date Finished:</b> {book.date_finished}</p>
            <p><b>Genre:</b> {book.genre}</p>
            <p><b>How I Know It Belongs to This Genre:</b> {book.genre_rationale}</p>
            <p><b>Main Characters:</b> {book.characters}</p>
            <p><b>Main Problem:</b> {book.problem}</p>
            <p><b>Solution:</b> {book.solution}</p>
            <p><b>2 Words I Learned:</b> {book.words_learned}</p>
            <p><b>Something I Learned:</b> {book.something_learned}</p>
            <p><b>A Question about This Book:</b> {book.question}</p>
            <Button value={book} onClick={handleShow} variant="dark">EDIT</Button> | <Button variant="danger" onClick={handleDelete}>DELETE</Button>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Log Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="entry-form">
                    
                    <Form.Row>
                        <Col>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required type='text' value={title} onChange={e => setTitle(e.target.value)} name="title" />
                        </Col>
                        <Col>
                        <Form.Label>Author:</Form.Label>
                        <Form.Control required type='text' value={author} onChange={e => setAuthor(e.target.value)} name="author" />
                        </Col>
                        <Col>
                        <Form.Label>Number of Pages:</Form.Label>
                        <Form.Control required type='number' value={pages} onChange={e => setPages(e.target.value)} name="pages" />
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Label>Date Finished:</Form.Label>
                        <Form.Control required type='date' value={date_finished} onChange={e => setDate(e.target.value)} name="date_finished" />
                        </Col>
                        <Col>
                        <Form.Label>Genre:</Form.Label>
                        <Form.Control required type='text' value={genre} onChange={e => setGenre(e.target.value)} name="genre" />
                        </Col>
                    </Form.Row>

                    <Form.Label>How You Know It Belongs to That Genre:</Form.Label>
                    <Form.Control required input type='text' value={genre_rationale} onChange={e => setGenre_Rationale(e.target.value)} name="genre_rationale" />
                    
                    <Form.Label>Main Characters:</Form.Label>
                    <Form.Control required type='text' value={characters} onChange={e => setCharacters(e.target.value)} name="characters" />
                    
                    <Form.Label>Main Problem:</Form.Label>
                    <Form.Control required type='text' value={problem} onChange={e => setProblem(e.target.value)} name="problem" />
                    
                    <Form.Label>Solution to the Problem:</Form.Label>
                    <Form.Control required type='text' value={solution} onChange={e => setSolution(e.target.value)} name="solution" />
                    
                    <Form.Label>2 Words You Learned:</Form.Label>
                    <Form.Control required type='text' value={words_learned} onChange={e => setWords(e.target.value)} name="words_learned" />
                    
                    <Form.Label>Something You Learned:</Form.Label>
                    <Form.Control required type='text' value={something_learned} onChange={e => setSomething_Learned(e.target.value)} name="something_learned" />
                    
                    <Form.Label>Question You Have about This Book:</Form.Label>
                    <Form.Control required type='text' value={question} onChange={e => setQuestion(e.target.value)} name="question" />
                    <br />
                    
                    
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={updateLog} variant="success">Save Changes</Button> | <Button variant="secondary" onClick={handleClose}>Cancel</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default connect(null, {updateBook, deleteBook})(LogEntry);

/*

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';

import {updateBook} from '../actions/BookLogActions';
import {deleteBook} from '../actions/BookLogActions'

import '../App.css';


function LogEntry({book}) {
    const [editable, setEditable] = useState(false);
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [pages, setPages] = useState(book.pages)
    const [date_finished, setDate] = useState(book.date_finished)
    const [genre, setGenre] = useState(book.genre)
    const [genre_rationale, setGenre_Rationale] = useState(book.genre_rationale)
    const [characters, setCharacters] = useState(book.characters)
    const [problem, setProblem] = useState(book.problem)
    const [solution, setSolution] = useState(book.solution)
    const [words_learned, setWords] = useState(book.words_learned)
    const [something_learned, setSomething_Learned] = useState(book.something_learned)
    const [question, setQuestion] = useState(book.question)
    let dispatch = useDispatch()
    
 
    return(
    <div className='log-entry' key={book.id}>
                        {editable ? <input type="text" className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/> :<h3>{book.title}</h3>}
                        {editable ? <input type="text" className="form-control"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}/> :<p>Author: {book.author}</p>}
                        {editable ? <input type="number" className="form-control"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)}/> :<p>Number of Pages: {book.pages}</p>}
                        {editable ? <input type="date" className="form-control"
                            value={date_finished}
                            onChange={(e) => setDate(e.target.value)}/> :<p>Date Finished: {book.date_finished}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}/> :<p>Genre: {book.genre}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={genre_rationale}
                            onChange={(e) => setGenre_Rationale(e.target.value)}/> :<p>How I Know It Belongs to This Genre: {book.genre_rationale}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={characters}
                            onChange={(e) => setCharacters(e.target.value)}/> :<p>Main Characters: {book.characters}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={problem}
                            onChange={(e) => setProblem(e.target.value)}/> :<p>Main Problem: {book.problem}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}/> :<p>Solution: {book.solution}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={words_learned}
                            onChange={(e) => setWords(e.target.value)}/> :<p>2 Words I Learned: {book.words_learned}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={something_learned}
                            onChange={(e) => setSomething_Learned(e.target.value)}/> :<p>Something I Learned: {book.something_learned}</p>}
                        {editable ? <input type="text" className="form-control"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}/> :<p>A Question about This Book: {book.question}</p>}
                        <button onClick={() => {
                            dispatch(updateBook(
                                {
                                    ...book,
                                    title: title,
                                    author: author,
                                    pages: pages,
                                    date_finished: date_finished,
                                    genre: genre,
                                    genre_rationale: genre_rationale,
                                    characters: characters,
                                    problem: problem,
                                    solution: solution,
                                    words_learned: words_learned,
                                    something_learned: something_learned,
                                    question: question
                                }
                            ))
                            if (editable) {
                                
                                    setTitle(book.title)
                                    setAuthor(book.author)
                                    setPages(book.pages)
                                    setDate(book.date_finished)
                                    setGenre(book.genre)
                                    setGenre_Rationale(book.genre_rationale)
                                    setCharacters(book.characters)
                                    setProblem(book.problem)
                                    setSolution(book.solution)
                                    setWords(book.words_learned)
                                    setSomething_Learned(book.something_learned)
                                    setQuestion(book.question)
                                
                            }
                            setEditable(!editable)
                        }
                            
                        }>{editable ? "Update" : "Edit"}</button>
                        
                        <button onClick={() => dispatch(deleteBook(book))}>DELETE</button>
                    </div>   
    )

    
    
}



export default connect(null, {updateBook, deleteBook})(LogEntry);



*/
