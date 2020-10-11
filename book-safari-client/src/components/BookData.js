import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap'


const BookData = ({
    thumbnail,
    title,
    pageCount,
    description,
    authors,
    previewLink,
    infoLink
}) => {


const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Card style={{width: '233px'}} className='m-auto border border-success'>
            <Card.Img top style={{width:'100%', height: '233px'}} src={thumbnail} alt={title} />
            <Card.Body>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Button onClick={handleShow}>Details</Button>
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
                <div className='modal-header d-flex justify-content-center'>
                    <h5 className='modal-title text-center' id='exampleModalLabel'>{title}</h5>
                    <button aria-label='Close' className='close' type='button' onClick={handleClose}>
                        <span aria-hidden={true}>X</span>
                    </button>
                </div>
                <div className='modal-body'>
                    <div className='d-flex justify-content-between ml-3'>
                        <img src={thumbnail} alt={title} style={{height: '233px'}} />
                        <div>
                            <p>Pages: {pageCount}</p>
                            <p>Author(s): {authors}</p>
                        </div>
                    </div>
                    <div className='mt-3'>{description}</div>
                </div>
                <div className='modal-footer'>
                    <div className='left-slide'>
                        <a href={previewLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferre'>Preview Book</a>
                    </div>
                    <div className='divider'></div>
                    <div className='right-slide'>
                        <a href={infoLink} className='btn-link' color='default' type='button' target='_blank' rel='noopener noreferre'>Book Info</a>
                    </div>
                </div>
            </Modal>
           
        </Card>
    )
}

export default BookData;
