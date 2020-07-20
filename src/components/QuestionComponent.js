import React from 'react';
import QuestionList from './QuestionList';
import '../styles/QuestionComponent.scss'

const QuestionComponent = ({ questionlist }) => {
    return (
        <div className="QuestionComponent">
            <QuestionList questionlist={questionlist} />
        </div>
    );
}

export default QuestionComponent;
