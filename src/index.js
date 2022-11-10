import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { movieInfo } from './MovieInfo';

class SmallIcon extends React.Component {
    render() {
        return (
            <div className="icon-block">
                <img className="icon" src={movieInfo.HappyGilmore.coverRoute} alt="Happy Gilmore Cover"/>
                <div className="icon-text">{movieInfo.HappyGilmore.title}</div>
            </div>
        );
    }
}




// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SmallIcon />);
