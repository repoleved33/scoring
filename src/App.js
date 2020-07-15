import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Question from './components/Question';
import Result from './components/Result';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: "문제 1",
      checked: false,
    },
    {
      id: 2,
      content: "문제 2",
      checked: false,      
    },
  ]);

  return (
    <div>
      <Router>
      <div>
      <Header/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/question" component={Question}/>
            <Route path="/result" component={Result}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
