import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../styles/movie.scss";
import "./../styles/popup.scss";
import EditPopup from "./editPopup";
import DeletePopup from "./deletePopup";

class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditOpened: false,
      isDeleteOpened: false,
    };
  }

  toggleEdit = () => {
    let showEdit = this.state.isEditOpened;
    this.setState({
      isEditOpened: !showEdit,
    });
  };

  toggleDelete = () => {
    let showDelete = this.state.isDeleteOpened;
    this.setState({
      isDeleteOpened: !showDelete,
    });
  };

  render() {
    return (
      <>
        <div className="movie-wrapper">
          <div>
            <img src={this.props.img} onClick={this.props.onGetMovieInfo}></img>
            <div class="dropdown-container" tabindex="-1">
              <div class="three-dots"></div>
              <div class="dropdown">
                <div className="three-dots-close-wrapper">
                  <span className="three-dots-close" />
                </div>
                <div className="movie-buttons-wrapper">
                  <div className="dropdown-buttons" onClick={this.toggleEdit}>
                    <p>Edit</p>
                  </div>
                  <div className="dropdown-buttons" onClick={this.toggleDelete}>
                    <p>Delete</p>
                  </div>
                </div>
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
        {this.state.isEditOpened && (
          <EditPopup onSave={this.props.handleSave} onClose={this.toggleEdit} />
        )}
        <DeletePopup
          onSave={this.props.handleDelete}
          isOpened={this.state.isDeleteOpened}
          onClose={this.toggleDelete}
        />
      </>
    );
  }
}

MovieComponent.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onOpenInfo: PropTypes.func,
};

export default MovieComponent;
