import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { movieInfo } from './MovieInfo';
import xButtonIcon from './images/X.png';
import undoButton from './images/undobutton.png';
import clearButton from './images/clearbutton.png';

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
            movieList: "hehe"
        };
    }

    render() {
        let listItems = this.props.movieList.map((m, idx) => <li key={idx}><SmallIcon movie={m} onClick={() => this.props.removeItem(idx)} /></li>);
        return (
            <div className="small-icon-collection">
                {listItems}
            </div>
        );
    }
}

class SidePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru],
            movieListHistory: [],
        };
        this.removeItem = this.removeItem.bind(this);
        this.clearList = this.clearList.bind(this);
        this.undoList = this.undoList.bind(this);
    }

    addItem(item) {
        let newState = this.state.movieList.slice();
        newState.push(item);
        this.setMovieListWithHistory(newState);
    }

    removeItem(index) {
        let newState = this.state.movieList.slice();
        newState.splice(index, 1);
        this.setMovieListWithHistory(newState);
    }

    clearList() {
        this.setMovieListWithHistory([])
    }

    setMovieListWithHistory(newList) {
        this.state.movieListHistory.push(this.state.movieList);
        this.setState({
            movieList: newList,
            movieListHistory: this.state.movieListHistory,
        });
    }

    undoList() {
        if(this.state.movieListHistory.length == 0) return;
        
        this.setState({
            movieList: this.state.movieListHistory.pop(),
            movieListHistory: this.state.movieListHistory,
        })
    }

    render() {
        return (
            <div className="sidepanel">
                <div className="sidepanel-label">{this.props.label}</div>
                <SmallIconCollection movieList={this.state.movieList} removeItem={this.removeItem}/>
                <div className="sidepanel-control-buttons">
                    <input className="sidepanel-clear" type="image" src={clearButton} alt="Clear" onClick={this.clearList}></input>
                    <input className="sidepanel-undo" type="image" src={undoButton} alt="Undo" onClick={this.undoList}></input>
                </div>
            </div>
        );
    }
}

class BottomBar extends React.Component {

}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SidePanel label="Liked Movies" />);
