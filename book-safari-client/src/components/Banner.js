import React from 'react';
import {Jumbotron as Banner, Row, Col} from 'react-bootstrap';
import '../App.css'

const bannerImage = require('./bannerImage.png');
export const Jumbotron = () => (
    
        <Banner fluid>
            <Row>
                <Col>
                    <div className='banner-text'>
                        <h1>Book Safari</h1>
                        <h4>Explore the Exciting World of Reading</h4>
                    </div>
                </Col>

                <Col>
                    <img src={bannerImage} alt="explorer image" width="200" height="150" />
                </Col>
            </Row>
            
        </Banner>
    
)