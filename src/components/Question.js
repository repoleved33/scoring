import React from 'react';
import QuestionItem from './QuestionItem';

const Question = ({ questionlist }) => {
    return (
        <div className="Question">
            {questionlist.map( question => (
                <QuestionItem question={question} key={question.id}/>
            ))}
        </div>
    );
}

export default Question;
