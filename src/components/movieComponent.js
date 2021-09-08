import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../styles/movie.scss";
import "./../styles/editPopup.scss";
import EditPopup from "./editPopup";
import DeletePopup from "./deletePopup";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showPopup: false,
      isEditOpened: false,
      isDeleteOpened: false,
    };
  }

  toggleDropdown = () => {
    let show = this.state.showDropdown;
    this.setState({
      showDropdown: !show,
    });
  };

  togglePopup = () => {
    let show = this.state.showPopup;
    this.setState({
      showPopup: !show,
    });
  };

  toggleEdit = () => {
    let show = this.state.isEditOpened;
    this.setState({
      isEditOpened: !show,
    });
  };

  toggleDelete = () => {
    let show = this.state.isDeleteOpened;
    this.setState({
      isDeleteOpened: !show,
    });
  };

  render() {
    return (
      <>
        <div className="movie-wrapper">
          <div>
            <img src={this.props.img}></img>
            <div class="dropdown">
              <ul
                class="dropbtn icons btn-right showLeft"
                onclick={this.toggleDropdown}
              >
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div id="myDropdown" class="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <div>
              <p>{this.props.name}</p>
              <p>{this.props.type}</p>
            </div>
            <div className="year">
              <p>{this.props.year}</p>
            </div>
          </div>
        </div>
        <EditPopup
          onSave={this.props.handleSave}
          isOpened={this.state.isEditOpened}
          onClose={this.toggleDelete}
          movieId={this.props.id}
          movieTitle={this.props.name}
          movieReleaseDate={this.props.year}
          movieUrl={this.props.url}
          movieGenre={this.props.genre}
          movieOverview={this.props.overview}
          movieRuntime={this.props.runtime}
        />
        <DeletePopup />
      </>
    );
  }
}

Movie.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
