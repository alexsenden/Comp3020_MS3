import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { movieInfo } from './MovieInfo';

import xButtonIcon from './images/X.png';
import undoButton from './images/undobutton.png';
import clearButton from './images/clearbutton.png';
import likedButton from './images/liked.png';
import watchedButton from './images/history.png';
import likeButton from './images/like.png';
import dislikeButton from './images/dislike.png';
import watchButton from './images/watch.png';

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
    render() {
        return (
            <div className="bottom-bar">
                <div>
                    <input className="liked-toggle" type="image" src={likedButton} alt="Liked" onClick={this.props.toggleLiked}></input>
                </div>
                <div>
                    <input className="searchbar" type="text" alt="Search Bar" placeholder="Search Movies..."></input>
                </div>
                <div>
                    <input className="watched-toggle" type="image" src={watchedButton} alt="History" onClick={this.props.toggleWatched}></input>
                </div>
            </div>
        );
    }
}

class CentrePanel extends React.Component {
    render() {
        return (
            <div className="centre-panel">
                <video className="trailer" key={this.props.movie.title} autoPlay loop controls>
                    <source src={this.props.movie.trailer}></source>
                </video> 
                <CentrePanelControls onLike={this.props.onLike} onWatch={this.props.onWatch} onDislike={this.props.onDislike}/>
                <h2 className="title">
                    {this.props.movie.title}
                </h2>
                <img className="rating" src={this.props.movie.rating} alt="Rating"/>
                <p className="description">
                    {this.props.movie.description}
                </p>
            </div>
        );
    }
}

class CentrePanelControls extends React.Component {
    render() {
        return (
            <div className="centre-panel-controls">
                <div>
                    <input className="dislike-button" type="image" src={dislikeButton} alt="Dislike" onClick={this.props.onDislike}></input>
                </div>
                <div>
                    <input className="watch-button" type="image" src={watchButton} alt="Watch" onClick={this.props.onWatch}></input>
                </div>
                <div>
                    <input className="like-button" type="image" src={likeButton} alt="Like" onClick={() => {this.props.onLike()}}></input>
                </div>
            </div>
        );
    }
}

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: movieInfo[1],
            likedToggle: true,
            watchedToggle: true,
            likedList: [movieInfo[1]],
            likedHistory: [],
            watchedList: [],
            watchedHistory: [],
        };

        this.onLike = this.onLike.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.clearLike = this.clearLike.bind(this);
        this.undoLike = this.undoLike.bind(this);

        this.onWatch = this.onWatch.bind(this);
        this.removeWatch = this.removeWatch.bind(this);
        this.clearWatch = this.clearWatch.bind(this);
        this.undoWatch = this.undoWatch.bind(this);

        this.toggleLiked = this.toggleLiked.bind(this);
        this.toggleWatched = this.toggleWatched.bind(this);

        this.newMovie = this.newMovie.bind(this);

        this.setLikeListWithHistory = this.setLikeListWithHistory.bind(this);
    }

    addLike(item) {
        let newList = this.state.likedList.slice();
        newList.push(item);
        console.log(newList);
        this.setState((currState) => {return ({
            currentMovie: currState.currentMovie,
            likedToggle: currState.likedToggle,
            watchedToggle: currState.watchedToggle,
            likedList: newList,
            likedHistory: currState.likedHistory,
            watchedList: currState.watchedList,
            watchedHistory: currState.watchedHistory,
        })}, () => console.log(this.state.likedList));
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
            currentMovie: this.state.currentMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
            likedList: newList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    undoLike() {
        if(this.state.likedHistory.length == 0) return;

        this.setState({
            currentMovie: this.state.currentMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
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
            currentMovie: this.state.currentMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: newList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    undoWatch() {
        if(this.state.watchedHistory.length == 0) return;

        this.setState({
            currentMovie: this.state.currentMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedHistory.pop(),
            watchedHistory: this.state.watchedHistory,
        });
    }

    toggleLiked() {
        this.setState({
            currentMovie: this.state.currentMovie,
            likedToggle: !this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    toggleWatched() {
        this.setState({
            currentMovie: this.state.currentMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: !this.state.watchedToggle,
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    newMovie() {
        let nextMovie = this.state.currentMovie;

        while(nextMovie == this.state.currentMovie) {
            nextMovie = movieInfo[Math.floor(Math.random() * movieInfo.length)];
        }

        this.setState({
            currentMovie: nextMovie,
            likedToggle: this.state.likedToggle,
            watchedToggle: this.state.watchedToggle,
            likedList: this.state.likedList,
            likedHistory: this.state.likedHistory,
            watchedList: this.state.watchedList,
            watchedHistory: this.state.watchedHistory,
        });
    }

    onLike() {
        this.addLike(this.state.currentMovie);
        this.newMovie();
    }

    onWatch() {
        this.addWatch(this.state.currentMovie);
        this.newMovie();
    }

    render() {
        let likedPanel = this.state.likedToggle ? <SidePanel className="liked-sidepanel" label="Liked Movies" movieList={this.state.likedList} removeItem={this.removeLike} clearList={this.clearLike} undoList={this.undoLike}/> : <div className="liked-sidepanel"><div className="sidepanel"/></div>;
        let watchedPanel = this.state.watchedToggle ? <SidePanel className="watched-sidepanel" label="Watched Movies" movieList={this.state.watchedList} removeItem={this.removeWatch} clearList={this.clearWatch} undoList={this.undoWatch} /> : <div className="watched-sidepanel"><div className="sidepanel"/></div>

        return (
            <div>
                <div className='content'>
                    {likedPanel}
                    <CentrePanel movie={this.state.currentMovie} onLike={this.onLike} onWatch={this.onWatch} onDislike={this.newMovie}/>
                    {watchedPanel}
                </div>
                <div>
                    <BottomBar toggleLiked={this.toggleLiked} toggleWatched={this.toggleWatched}/>
                </div>
            </div>
        );
    }
}


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Screen />);
