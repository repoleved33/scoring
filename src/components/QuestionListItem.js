import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import cn from 'classnames';
import '../styles/QuestionListItem.scss';

const QuestionListItem = ({ question }) => {
    const {id, content, option_1, checked_1, option_2, checked_2} = question;
    return (
        <div className="QuestionListItem">
            <div>
                <div className="QuestionHeader">
                    {id}. {content}
                </div>         
                <div className="QuestionContent">
                    <div className={cn('checkbox',{checked_1})}>
                        {checked_1 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_1}</div>
                    </div>
                    <div className={cn('checkbox',{checked_2})}>
                        {checked_2 ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        <div className="text">{option_2}</div>
                    </div>

                </div>
   
            </div>
        </div>
    );
};



export default QuestionListItem;