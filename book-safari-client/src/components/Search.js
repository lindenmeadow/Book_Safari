import React, {useState} from 'react';
import {InputGroup, FormControl, Button, FormGroup, Spinner} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import BookData from './BookData'


export const Search = () => {
  const [resultsNum, setResultsNum] = useState(10);
  const [startNumber, setStartNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([])

  const handleSubmit = () => {
    setLoading(true)
    if(resultsNum > 50 || resultsNum < 1) {
      toast.error('max results must be between 1 and 40')
    } else {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${resultsNum}&startIndex=${startNumber}`).then(res => {
        if(startNumber >= res.data.totalItems || startNumber < 1) {
          toast.error(`The number of results to dispaly must be between 1 and ${res.data.totalItems}`);
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

  const searchForm = () => {

    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column border border-success ml-5 mr-5'>
        
        <h1 className='display-2 text-center text-dark mb-3'>Let's Search for Books!</h1>
        <p>Powered by Google Books</p>
        <div style={{width: '60%'}}>
          <InputGroup size='1g' className='mb-3'>
            <FormControl 
              placeholder="Enter a title, author name, or keyword(s)" 
              value={search} 
              onChange={e => setSearch(e.target.value)}
            />
              <InputGroup.Append>
                <Button color='secondary' onClick={handleSubmit}>
                  <i class="fas fa-binoculars"></i>
                </Button>
              </InputGroup.Append>
          </InputGroup>
          <div className="d-flex text-dark justify-content-center">
            <FormGroup className='ml-5'>
              <p>Enter the number of search results you want to see (1-50).</p>
              <FormControl 
                type='number' 
                id='resultsNum' 
                value={resultsNum}
                onChange={e => setResultsNum(e.target.value)}
              />
            </FormGroup>
            <FormGroup className='ml-5'>
              <p>Set the search results starting point. (For example, if you want to start with the first item the search finds, set the number to 1. If you have viewed the first 10 items brought up by your search and want to view the next 10, set the number to 11.)</p>
              <FormControl
                type='number' 
                id='startIndex'  
                value={startNumber}
                onChange={e => setStartNumber(e.target.value)}
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
      {searchForm()}
      {handleCards()}
      <ToastContainer />

    </div>
  )
}

export default Search;
