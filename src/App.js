import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import Header from './components/Header';
import './styles/App.scss';

function App() {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      content: "문제 1의 내용입니다",
      option_1: "옵션 1",
      checked_1: true,
      option_2: "옵션 2",
      checked_2: false,
    },
    {
      id: 2,
      content: "문제 2 내용입니다",
      option_1: "옵션 1",
      checked_1: true,
      option_2: "옵션 2",
      checked_2: false,
    },
    {
      id: 3,
      content: "문제 3 내용입니다",
      option_1: "옵션 1",
      checked_1: true,
      option_2: "옵션 2",
      checked_2: false,
    },
    {
      id: 4,
      content: "문제 4 내용입니다",
      option_1: "옵션 1",
      checked_1: true,
      option_2: "옵션 2",
      checked_2: false,
    },
    {
      id: 5,
      content: "문제 5 내용입니다",
      option_1: "옵션 1",
      checked_1: true,
      option_2: "옵션 2",
      checked_2: false,
    },
  ]);

  return (
    <div className="App">
      <Router>
      <div>
      <Header/>
          <Switch>
            <Route exact path="/" component={MainComponent}/>
            <Route path="/question" render={()=> <QuestionComponent questionlist={questions} setQuestions={setQuestions} />}/>
            <Route path="/result" component={ResultComponent}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
