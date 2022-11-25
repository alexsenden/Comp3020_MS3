import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import {
  BsHeart,
  BsBookmarkHeartFill,
  BsClockHistory,
  BsPlayCircle,
} from "react-icons/bs";

import {
  AiOutlineClose,
  AiOutlineUndo,
  AiOutlineSearch,
  AiOutlineEye,
  AiOutlineInfoCircle,
} from "react-icons/ai";

import "./index.css";

import { movieInfo, genre } from "./MovieInfo";

import xButtonIcon from "./images/X.png";

class SmallIcon extends React.Component {
  render() {
    return (
      <div className="icon-block">
        <div
          className="small-movie-info clickable"
          onClick={() => this.props.setMovie(this.props.movie)}
        >
          <img
            className="icon"
            src={this.props.movie.coverRoute}
            alt={this.props.movie.title + " Cover"}
          />
          <div className="icon-text">{this.props.movie.title}</div>
        </div>
        <input
          className="small-x-button clickable"
          type="image"
          src={xButtonIcon}
          alt="X"
          onClick={this.props.removeItem}
        ></input>
      </div>
    );
  }
}

class SmallIconCollection extends React.Component {
  render() {
    let listItems = this.props.movieList.map((m, idx) => (
      <li key={idx}>
        <SmallIcon
          movie={m}
          setMovie={this.props.setMovie}
          removeItem={() => this.props.removeItem(idx)}
        />
      </li>
    ));
    return <div className="small-icon-collection">{listItems}</div>;
  }
}

class SidePanel extends React.Component {
  render() {
    return (
      <div
        className="sidepanel"
        style={{
          width: this.props.visibility.width,
          transform: this.props.visibility.scale,
          display: this.props.visibility.display,
        }}
      >
        <div className="sidepanel-label">{this.props.label}</div>
        <SmallIconCollection
          movieList={this.props.movieList}
          removeItem={this.props.removeItem}
          setMovie={this.props.setMovie}
        />
        {/* panel buttons */}
        <div className="panel-buttons d-flex justify-content-between">
          {/* clear button */}
          <div className="sidepanel-clear">
            <Button
              className=""
              variant="outline-danger"
              onClick={this.props.clearList}
            >
              Clear
            </Button>
          </div>
          {/* undo button */}
          <div className="sidepanel-undo">
            <Button
              className=""
              variant="outline-light"
              onClick={this.props.undoList}
            >
              <AiOutlineUndo /> Undo
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  onSearch(event) {
    this.props.setSearchTerm(event.target.value);
  }

  clearSearch() {
    this.refs.searchbar.value = "";
    this.props.setSearchTerm("");
  }

  render() {
    let searchButton = this.props.searchActive ? (
      <button
        class="btn btn-danger"
        type="button"
        onClick={() => this.clearSearch()}
      >
        <AiOutlineClose />
      </button>
    ) : (
      <span className="input-group-text">
        <AiOutlineSearch />
      </span>
    );

    return (
      <div className="bottom-bar">
        <div>
          <div className="liked-toggle clickable">
            <Button
              className=""
              onClick={this.props.toggleLiked}
              variant={this.props.likedToggle ? "warning" : "outline-warning"}
            >
              {/* the like badge is updated to a maximum of 9 */}
              {this.props.numLikes < 10 ? (
                <span className="badge"> {this.props.numLikes}</span>
              ) : (
                <span className="badge"> 9+</span>
              )}
              <BsBookmarkHeartFill size="2rem" color="white" /> Likes
            </Button>
          </div>
        </div>
        <div className="input-group searchbar">
          <input
            id="searchbar"
            ref="searchbar"
            type="text"
            className="form-control"
            placeholder="Search Movies..."
            aria-label="Search Movies..."
            aria-describedby="button-addon2"
            onChange={this.onSearch}
          />
          {searchButton}
        </div>
        <div>
          <div className="watched-toggle clickable">
            <Button
              onClick={this.props.toggleWatched}
              variant={this.props.watchedToggle ? "warning" : "outline-warning"}
            >
              <BsClockHistory size="2rem" color="white" /> History
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

class CentrePanel extends React.Component {
  toggleFullScreen() {
    var el = document.getElementById("trailer");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  }

  render() {
    let controlsOffset = this.props.watchedToggle
      ? this.props.likedToggle
        ? `23%`
        : `28%`
      : `5%`;

    let playButtonOffset = `50%`;
    if (this.props.watchedToggle && !this.props.likedToggle) {
      playButtonOffset = `38.5%`;
    } else if (!this.props.watchedToggle && this.props.likedToggle) {
      playButtonOffset = `61.5%`;
    }

    return (
      <div className="centre-panel">
        <div className="trailer">
          <video id="trailer" key={this.props.movie.title} autoPlay loop>
            <source src={this.props.movie.trailer}></source>
          </video>
        </div>
        <div className="movie-info ">
          <div className="d-flex flex-row justify-content-start align-items-center">
            <div>
              <h2 className="title">{this.props.movie.title}</h2>
              <img
                className="rating"
                src={this.props.movie.rating}
                alt="Rating"
              />
            </div>
          </div>
          <div className="description">
            <p>{this.props.movie.description}</p>
          </div>
        </div>
        <div
          className="play-button overlay-component transparent-item"
          style={{ left: playButtonOffset }}
        >
          <BsPlayCircle
            size="5rem"
            color="white"
            onClick={() => {
              this.props.onWatch(this.props.movie);
              this.toggleFullScreen();
            }}
          />
        </div>
        <div
          className="center-div bottom-fix overlay-component transparent-item"
          style={{ right: controlsOffset }}
        >
          <CentrePanelControls
            onLike={this.props.onLike}
            onDislike={this.props.onDislike}
          />
        </div>
      </div>
    );
  }
}

class CentrePanelControls extends React.Component {
  render() {
    return (
      <div className="centre-panel-controls">
        <div>
          <Button
            className="btn-large"
            variant="success"
            size="lg"
            onClick={this.props.onLike}
          >
            <BsHeart />
          </Button>
        </div>
        <div></div>
        <div className="horizontal-line"></div>
        <div>
          <Button
            className="btn-large"
            variant="danger"
            size="lg"
            onClick={this.props.onDislike}
          >
            <AiOutlineClose />
          </Button>
        </div>
      </div>
    );
  }
}

class TabBar extends React.Component {
  render() {
    let bg_activeColour = "goldenrod";
    let text_activeColour = "black";

    return (
      <div className="tab-bar">
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.forYou
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.forYou)}
        >
          For You
        </button>
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.trending
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.trending)}
        >
          Trending
        </button>
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.comedy
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.comedy)}
        >
          Comedy
        </button>
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.action
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.action)}
        >
          Action
        </button>
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.adventure
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.adventure)}
        >
          Adventure
        </button>
        <button
          className="tablinks"
          style={
            this.props.currentGenre === genre.romance
              ? { backgroundColor: bg_activeColour, color: text_activeColour }
              : {}
          }
          onClick={() => this.props.selectGenre(genre.romance)}
        >
          Romance
        </button>
      </div>
    );
  }
}

class SearchPanel extends React.Component {
  render() {
    return (
      <div className="centre-panel">
        <p className="search-result-title">
          Showing Results for "{this.props.searchTerm}"
        </p>
        <SearchResultList
          searchTerm={this.props.searchTerm}
          setCurrentMovie={this.props.setCurrentMovie}
          setSearchTerm={this.props.setSearchTerm}
        />
      </div>
    );
  }
}

class SearchResultList extends React.Component {
  getMoviesFromSearchTerm(searchTerm) {
    let term = searchTerm.toLowerCase();
    let movieList = [];

    movieInfo.forEach((m) => {
      if (m.title.toLowerCase().indexOf(term) != -1) {
        movieList.push(m);
      }
    });

    movieList.sort(
      (a, b) =>
        a.title.toLowerCase().indexOf(term) -
        b.title.toLowerCase().indexOf(term)
    );

    return movieList;
  }

  render() {
    let movieList = this.getMoviesFromSearchTerm(this.props.searchTerm);

    let listItems = movieList.map((m, idx) => (
      <li key={idx}>
        <SearchResult
          movie={m}
          setMovie={this.props.setMovie}
          removeItem={() => this.props.removeItem(idx)}
          setCurrentMovie={this.props.setCurrentMovie}
          setSearchTerm={this.props.setSearchTerm}
        />
      </li>
    ));

    return <div className="search-result-collection">{listItems}</div>;
  }
}

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreenActive: false,
    }

    this.viewInformation = this.viewInformation.bind(this);
    this.watchNow = this.watchNow.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.closeHiddenVideo = this.closeHiddenVideo.bind(this);
  }

  viewInformation() {
    this.props.setCurrentMovie(this.props.movie);
    document.getElementById("searchbar").value = "";
    this.props.setSearchTerm("");
  }

  watchNow() {
    this.setState({
      ...this.state,
      fullscreenActive: true,
    }, 
    () => {
      this.toggleFullScreen();
    }
    );
  }

  toggleFullScreen() {
    var el = document.getElementById("hidden-video-" + this.props.movie.title);
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  }

  closeHiddenVideo() {
    this.setState({
      ...this.state,
      fullscreenActive: false,
    });
  }

  render() {
    return (
      <div className="icon-block">
        <div className="search-result">
          <img
            className="icon"
            src={this.props.movie.coverRoute}
            alt={this.props.movie.title + " Cover"}
          />
          <div>
            <div className="icon-text">{this.props.movie.title}</div>
            <img
              className="small-rating"
              src={this.props.movie.rating}
              alt="Rating"
            />
          </div>
          <div className="search-result-button-collection">
            <button
              type="button"
              class="btn btn-sm btn-outline-light search-result-button"
              onClick={() => this.viewInformation()}
              block
            >
              <AiOutlineInfoCircle /> View Information
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-light search-result-button"
              onClick={() => this.watchNow()}
              blocks
            >
              <AiOutlineEye /> Watch Now
            </button>
          </div>
        </div>
        { this.state.fullscreenActive 
          ? <HiddenVideo movie={this.props.movie} closeHiddenVideo={this.closeHiddenVideo} />
          : <div/>
        }
      </div>
    );
  }
}

class HiddenVideo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: false,
    }
  }

  componentDidMount() {
    document.getElementById("hidden-video-" + this.props.movie.title).addEventListener('fullscreenchange', () => {
      if(!this.state.fullscreen) {
        this.setState({
          ...this.state,
          fullscreen: true,
        })
      }
      else {
        this.props.closeHiddenVideo();
      }
    });
  }

  render() {
    return (
      <video id={"hidden-video-" + this.props.movie.title} className="hidden-video" key={this.props.movie.title} controls autoPlay>
        <source src={this.props.movie.trailer}></source>
      </video> 
    );
  }
}

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: movieInfo[0],
      likedToggle: false,
      watchedToggle: false,
      likedList: [],
      likedHistory: [],
      watchedList: [],
      watchedHistory: [],
      currentGenre: genre.forYou,
      searchTerm: "",
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
    this.forceCurrentMovie = this.forceCurrentMovie.bind(this);

    this.selectGenre = this.selectGenre.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
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
    this.setLikeListWithHistory([]);
  }

  setLikeListWithHistory(newList) {
    this.state.likedHistory.push(this.state.likedList);
    this.state.likedList = newList;
    this.state.numberOfLikes = newList.length;
    this.setState({
      ...this.state,
      likedList: newList,
    });
  }

  undoLike() {
    if (this.state.likedHistory.length == 0) return;

    this.setState({
      ...this.state,
      likedList: this.state.likedHistory.pop(),
      numberOfLikes: this.state.likedHistory.length,
    });
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
    this.setWatchedListWithHistory([]);
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
    if (this.state.watchedHistory.length == 0) return;

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

    while (
      nextMovie === this.state.currentMovie ||
      (this.state.currentGenre > 0 &&
        !nextMovie.genres.includes(this.state.currentGenre))
    ) {
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

  forceCurrentMovie(movie) {
    this.state.currentMovie = movie;
  }

  onLike() {
    if (!this.state.likedList.includes(this.state.currentMovie)) {
      this.addLike(this.state.currentMovie);
    }
    this.newMovie();
  }

  onWatch() {
    if (!this.state.watchedList.includes(this.state.currentMovie)) {
      this.addWatch(this.state.currentMovie);
    }
  }

  selectGenre(genre) {
    if (this.state.currentGenre !== genre) {
      this.setState(
        {
          ...this.state,
          currentGenre: genre,
        },
        () => this.newMovie()
      );
    }
  }

  setSearchTerm(term) {
    if (this.state.searchTerm !== term) {
      this.setState({
        ...this.state,
        searchTerm: term,
      });
    }
  }

  render() {
    let trailerPanel = (
      <CentrePanel
        movie={this.state.currentMovie}
        onLike={this.onLike}
        onWatch={this.onWatch}
        onDislike={this.newMovie}
        likedToggle={this.state.likedToggle}
        watchedToggle={this.state.watchedToggle}
      />
    );

    let searchPanel = (
      <SearchPanel
        searchTerm={this.state.searchTerm}
        setCurrentMovie={this.forceCurrentMovie}
        setSearchTerm={this.setSearchTerm}
      />
    );

    let centreContent =
      this.state.searchTerm !== "" ? searchPanel : trailerPanel;

    return (
      <div className="page">
        <div>
          <TabBar
            selectGenre={this.selectGenre}
            currentGenre={this.state.currentGenre}
          />
        </div>
        <div className="content">
          <SidePanel
            className="liked-sidepanel container"
            visibility={
              this.state.likedToggle
                ? { width: "35%", scale: "scaleX(1)" }
                : { width: "0%", scale: "scaleX(0)" }
            }
            label="Liked Movies"
            movieList={this.state.likedList}
            f
            removeItem={this.removeLike}
            clearList={this.clearLike}
            undoList={this.undoLike}
            setMovie={this.setCurrentMovie}
          />

          {centreContent}

          <SidePanel
            visibility={
              this.state.watchedToggle
                ? { width: "35%", scale: "scaleX(1)" }
                : { width: "0%", scale: "scaleX(0)" }
            }
            label="Watched Movies"
            movieList={this.state.watchedList}
            removeItem={this.removeWatch}
            clearList={this.clearWatch}
            undoList={this.undoWatch}
            setMovie={this.setCurrentMovie}
          />
        </div>
        <div>
          <BottomBar
            toggleLiked={this.toggleLiked}
            likedToggle={this.state.likedToggle}
            toggleWatched={this.toggleWatched}
            watchedToggle={this.state.watchedToggle}
            numLikes={this.state.likedList.length}
            setSearchTerm={this.setSearchTerm}
            searchActive={this.state.searchTerm !== ""}
          />
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Screen />);
