import React, {useState} from 'react';
import {InputGroup, FormControl, Button, FormGroup, Spinner} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BookData from './BookData'


export const Search = () => {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([])

  const handleSubmit = () => {
    setLoading(true)
    if(maxResults > 40 || maxResults < 1) {
      toast.error('max results must be between 1 and 40')
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`).then(res => {
        if(startIndex >= res.data.totalItems || startIndex < 1) {
          toast.error(`max results must be between 1 and ${res.data.totalItems}`);
        } else {
          if(res.data.items.length > 0) {
            setCards(res.data.items)
            setLoading(false)
          }
        }
        console.log(res.data)
      }).catch(err => {
        setLoading(true)
        toast.error(`${err.response.data.error.message}`)
      })
    }
  }

  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        <div className="filter"></div>
        <h1 className='display-2 text-center text-dark mb-3'>Let's Search for Books!</h1>
        <div style={{width: '60%'}}>
          <InputGroup size='1g' className='mb-3'>
            <FormControl 
              placeholder="Enter a title, author name, or keyword(s)" 
              value={query} 
              onChange={e => setQuery(e.target.value)}
            />
              <InputGroup.Append>
                <Button color='secondary' onClick={handleSubmit}>
                  <i class="fas fa-binoculars"></i>
                </Button>
              </InputGroup.Append>
          </InputGroup>
          <div className="d-flex text-dark justify-content-center">
            <FormGroup className='ml-5'>
              <p>Enter the number of search results you want (1-50):</p>
              <FormControl 
                type='number' 
                id='maxResults' 
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </FormGroup>
            <FormGroup className='ml-5'>
              <p>Search results starting point:</p>
              <FormControl
                type='number' 
                id='startIndex'  
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }

  const handleCards = () => {
    const items = cards.map((item, i) => {
      let thumbnail = '';
      if(item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return ( 
        <div className='col-lg-4 mb-3' key={item.id}>
          <BookData
            thumbnail={thumbnail} 
            title={item.volumeInfo.title} 
            pageCount={item.volumeInfo.pageCount}
            authors={item.volumeInfo.authors}
            language={item.volumeInfo.language}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        </div>
      )
    })
    if(loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{width:'3rem', height:'3rem'}} />
        </div>
      )
    } else {
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      )
      
    }
  }

  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      {handleCards()}
      <ToastContainer />

    </div>
  )
}

export default Search;
