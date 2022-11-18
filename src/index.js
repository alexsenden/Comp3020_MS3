import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { movieInfo, genre } from './MovieInfo';

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
                <div className="small-movie-info clickable" onClick={() => this.props.setMovie(this.props.movie)}>
                    <img className="icon" src={this.props.movie.coverRoute} alt={this.props.movie.title + " Cover"}/>
                    <div className="icon-text">{this.props.movie.title}</div>
                </div>
                <input className="small-x-button clickable" type="image" src={xButtonIcon} alt="X" onClick={this.props.removeItem}></input>
            </div>
        );
    }
}

class SmallIconCollection extends React.Component {
    render() {
        let listItems = this.props.movieList.map((m, idx) => <li key={idx}><SmallIcon movie={m} setMovie={this.props.setMovie} removeItem={() => this.props.removeItem(idx)} /></li>);
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
            <div className="sidepanel" style={{visibility: this.props.visibility}}>
                <div className="sidepanel-label">{this.props.label}</div>
                <SmallIconCollection movieList={this.props.movieList} removeItem={this.props.removeItem} setMovie={this.props.setMovie}/>
                <div className="sidepanel-control-buttons">
                    <input className="sidepanel-clear clickable" type="image" src={clearButton} alt="Clear" onClick={this.props.clearList}></input>
                    <input className="sidepanel-undo clickable" type="image" src={undoButton} alt="Undo" onClick={this.props.undoList}></input>
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
                    <input className="liked-toggle clickable" type="image" src={likedButton} alt="Liked" onClick={this.props.toggleLiked}></input>
                </div>
                <div>
                    <input className="searchbar" type="text" alt="Search Bar" placeholder="Search Movies..."></input>
                </div>
                <div>
                    <input className="watched-toggle clickable" type="image" src={watchedButton} alt="History" onClick={this.props.toggleWatched}></input>
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
                    <input className="dislike-button clickable" type="image" src={dislikeButton} alt="Dislike" onClick={this.props.onDislike}></input>
                </div>
                <div>
                    <input className="watch-button clickable" type="image" src={watchButton} alt="Watch" onClick={this.props.onWatch}></input>
                </div>
                <div>
                    <input className="like-button clickable" type="image" src={likeButton} alt="Like" onClick={this.props.onLike}></input>
                </div>
            </div>
        );
    }
}

class TabBar extends React.Component {
    render() {
        let activeColour = "#ccc";

        return (
            <div className="tab-bar">
                <button className="tablinks" style={this.props.currentGenre === genre.forYou ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.forYou)}>For You</button>
                <button className="tablinks" style={this.props.currentGenre === genre.trending ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.trending)}>Trending</button>
                <button className="tablinks" style={this.props.currentGenre === genre.comedy ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.comedy)}>Comedy</button>
                <button className="tablinks" style={this.props.currentGenre === genre.action ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.action)}>Action</button>
                <button className="tablinks" style={this.props.currentGenre === genre.adventure ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.adventure)}>Adventure</button>
                <button className="tablinks" style={this.props.currentGenre === genre.romance ? {backgroundColor: activeColour} : {}} onClick={() => this.props.selectGenre(genre.romance)}>Romance</button>
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
            currentGenre: genre.forYou,
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
        this.setCurrentMovie = this.setCurrentMovie.bind(this);

        this.selectGenre = this.selectGenre.bind(this);
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
        this.state.likedList = newList;
        this.setState({
            ...this.state,
            likedList: newList,
        });
    }

    undoLike() {
        if(this.state.likedHistory.length == 0) return;

        this.setState({
            ...this.state,
            likedList: this.state.likedHistory.pop()
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
        this.state.watchedList = newList;
        this.setState({
            ...this.state,
            watchedList: newList,
        });
    }

    undoWatch() {
        if(this.state.watchedHistory.length == 0) return;

        this.setState({
            ...this.state,
            watchedList: this.state.watchedHistory.pop(),
        });
    }

    toggleLiked() {
        this.setState({
            ...this.state,
            likedToggle: !this.state.likedToggle,
        });
    }

    toggleWatched() {
        this.setState({
            ...this.state,
            watchedToggle: !this.state.watchedToggle,
        });
    }

    newMovie() {
        let nextMovie = this.state.currentMovie;

        while(nextMovie === this.state.currentMovie || (this.state.currentGenre > 0 && !nextMovie.genres.includes(this.state.currentGenre))) {
            nextMovie = movieInfo[Math.floor(Math.random() * movieInfo.length)];
        }

        this.setCurrentMovie(nextMovie);
    }

    setCurrentMovie(movie) {
        this.setState({
            ...this.state,
            currentMovie: movie,
        });
    }

    onLike() {
        if(!this.state.likedList.includes(this.state.currentMovie)) {
            this.addLike(this.state.currentMovie);
        }
        this.newMovie();
    }

    onWatch() {
        if(!this.state.watchedList.includes(this.state.currentMovie)) {
            this.addWatch(this.state.currentMovie);
        }
    }

    selectGenre(genre) {
        if(this.state.currentGenre !== genre) {
            this.setState({
                ...this.state,
                currentGenre: genre,
            }, () => this.newMovie());
        }
    }

    render() {
        return (
            <div>
                <div>
                    <TabBar selectGenre={this.selectGenre} currentGenre={this.state.currentGenre}/>
                </div>
                <div className='content'>
                    <SidePanel className="liked-sidepanel" visibility={this.state.likedToggle ? "visible" : "hidden"} label="Liked Movies" movieList={this.state.likedList} removeItem={this.removeLike} clearList={this.clearLike} undoList={this.undoLike} setMovie={this.setCurrentMovie} />
                    <CentrePanel movie={this.state.currentMovie} onLike={this.onLike} onWatch={this.onWatch} onDislike={this.newMovie}/>
                    <SidePanel className="watched-sidepanel" visibility={this.state.watchedToggle ? "visible" : "hidden"} label="Watched Movies" movieList={this.state.watchedList} removeItem={this.removeWatch} clearList={this.clearWatch} undoList={this.undoWatch} setMovie={this.setCurrentMovie} />
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
