import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { Nav, Button, Navbar } from 'react-bootstrap'; 
import logo from './logo.svg';
import './App.css';
import QuestionContainer from './components/QuestionContainer';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Button type="button" variant="warning">Start</Button></Nav.Link>
            <Nav.Link><Button type="button" variant="warning">Start</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Navbar>

      
      
{/*       
      <Header>
        <Link to="/question">
          <Button type="button" variant="warning">Start</Button>
        </Link>
      </Header>

      <Body>
        <Route path="/" component={MainContainer}></Route>
        <Route path="/question" component={QuestionContainer}></Route>
      </Body> */}
      
      
      
      
      
      
        

    </Fragment>
  );
}

export default App;
