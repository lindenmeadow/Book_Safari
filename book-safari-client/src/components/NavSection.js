import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

export const NavSection = () => (
        <Navbar expand='lg'>
            <Navbar.Brand className="text-light" href="/">BOOK SAFARI</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Item><Nav.Link className="text-light" href="/">HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="text-light" href="/books">BOOK LOG</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="text-light" href="/search">BOOK SEARCH</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
)

