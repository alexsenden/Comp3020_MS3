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
    render() {
        return (
            <div className="sidepanel">
                <div className="sidepanel-label">{this.props.label}</div>
                <SmallIconCollection movieList={this.props.movieList} removeItem={this.props.removeItem}/>
                <div className="sidepanel-control-buttons">
                    <input className="sidepanel-clear" type="image" src={clearButton} alt="Clear" onClick={this.props.clearList}></input>
                    <input className="sidepanel-undo" type="image" src={undoButton} alt="Undo" onClick={this.props.undoList}></input>
                </div>
            </div>
        );
    }
}

class BottomBar extends React.Component {

}

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likedList: [movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru],
            likedHistory: [],
            watchedList: [movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru, movieInfo.Alien, movieInfo.HappyGilmore, movieInfo.MinionsRiseOfGru],
            watchedHistory: [],
        };

        this.addLike = this.addLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.clearLike = this.clearLike.bind(this);
        this.undoLike = this.undoLike.bind(this);

        this.addWatch = this.addWatch.bind(this);
        this.removeWatch = this.removeWatch.bind(this);
        this.clearWatch = this.clearWatch.bind(this);
        this.undoWatch = this.undoWatch.bind(this);
    }

    addLike(item) {
        let newState = this.state.likedList.slice();
        newState.push(item);
        this.setLikeListWithHistory(newState);
    }

    removeLike(index) {
        let newState = this.state.likedList.slice();
        newState.splice(index, 1);
        this.setLikeListWithHistory(newState);
    }

    clearLike() {
        this.setLikeListWithHistory([])
    }

    setLikeListWithHistory(newList) {
        this.state.likedHistory.push(this.state.likedList);
        this.setState({
            likedList: newList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    undoLike() {
        if(this.state.likedHistory.length == 0) return;

        this.setState({
            likedList: this.state.likedHistory.pop(),
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        })
    }

    addWatch(item) {
        let newState = this.state.watchedList.slice();
        newState.push(item);
        this.setWatchedListWithHistory(newState);
    }

    removeWatch(index) {
        let newState = this.state.watchedList.slice();
        newState.splice(index, 1);
        this.setWatchedListWithHistory(newState);
    }

    clearWatch() {
        this.setWatchedListWithHistory([])
    }

    setWatchedListWithHistory(newList) {
        this.state.watchedHistory.push(this.state.watchedList);
        this.setState({
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: newList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    undoWatch() {
        if(this.state.watchedHistory.length == 0) return;

        this.setState({
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedHistory.pop(),
            watchedHistory: this.state.watchedHistory,
        })
    }

    render() {
        return (
            <div className='screen'>
                <SidePanel className="liked-sidepanel" label="Liked Movies" movieList={this.state.likedList} removeItem={this.removeLike} clearList={this.clearLike} undoList={this.undoLike} />
                <SidePanel className="watched-sidepanel" label="Watched Movies" movieList={this.state.watchedList} removeItem={this.removeWatch} clearList={this.clearWatch} undoList={this.undoWatch} />
            </div>
        );
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Screen />);
