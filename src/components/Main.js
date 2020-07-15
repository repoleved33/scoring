import React from 'react';
import '../styles/Main.scss';

const Main = ({ history }) => {
    return (
        <form className="Main">
            <div>
                <button type="submit" onClick={() => {history.push('/question')}}>
                    START
                </button>
            </div>
        </form>
    );
}

export default Main;
