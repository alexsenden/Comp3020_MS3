import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { movieInfo } from './MovieInfo';
import xButtonIcon from './X.png'

class SmallIcon extends React.Component {
    render() {
        return (
            <div className="icon-block">
                <img className="icon" src={this.props.movie.coverRoute} alt="Happy Gilmore Cover"/>
                <div className="icon-text">{this.props.movie.title}</div>
                <input className="small-x-button" type="image" src={xButtonIcon} alt="X" onClick={this.props.onClick}></input>
            </div>
        );
    }
}

class SmallIconCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru],
        };
    }

    addItem(item) {
        let newState = this.state.movieList.slice();
        newState.push(item);
        this.setState({movieList: item});
    }

    removeItem(item) {
        let newState = this.state.movieList.splice(item, 1);
        this.setState(newState);
    }

    render() {
        let listItems = this.state.movieList.map((m, idx) => <li key={idx}><SmallIcon movie={m} onClick={() => this.removeItem(idx)} /></li>);
        return (
            <div className="small-icon-collection">
                {listItems}
            </div>
        );
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SmallIconCollection />);
