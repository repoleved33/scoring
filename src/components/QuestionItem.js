import React from 'react';

const QuestionListItem = ({ question }) => {
    return (
        <div className="QuestionItem">
            <div>
                {question.id}
                {question.content}
                {toString(question.checked)}
            </div>
        </div>
    );
};


export default QuestionListItem;