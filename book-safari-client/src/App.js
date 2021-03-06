import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import Books from './components/Books';
import {SearchPage} from './components/SearchPage';
//import {Layout} from './components/Layout';
import {NavSection} from './components/NavSection';
import {Jumbotron} from './components/Banner';
import {Container} from 'react-bootstrap';

import './App.css';


class App extends Component {
  render() {
    return ( 
    <React.Fragment>
      
      <Container >
        <div className = "content" >
          <NavSection />
          <Jumbotron />

          <Router>
            <Switch>
              <Route exact path = '/' component = {Home}/> 
              <Route exact path = '/books' component = {Books}/>
              
              <Route path = '/search' component = {SearchPage} /> 
            </Switch>

          </Router> 
        </div> 
      </Container>
      
    </React.Fragment>
    );
  }

}

export default App;
