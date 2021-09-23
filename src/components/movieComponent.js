import React, { Component } from "react";
import PropTypes from "prop-types";

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
    this.setState((state) => {
      return {
        isDeleteOpened: !state.isDeleteOpened,
      };
    });
  };

  render() {
    const { isDeleteOpened, isEditOpened } = this.state;
    const { handleDelete, handleSave, img, onGetMovieInfo, name, type, year } =
      this.props;
    return (
      <>
        <div className="movie-wrapper">
          <div>
            <img src={img} onClick={onGetMovieInfo}></img>
            <div className="dropdown-container" tabIndex="-1">
              <div className="three-dots"></div>
              <div className="dropdown">
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
              <p>{name}</p>
              <p>{type}</p>
            </div>
            <div className="year">
              <p>{year}</p>
            </div>
          </div>
        </div>
        {isEditOpened && (
          <EditPopup onSave={handleSave} onClose={this.toggleEdit} />
        )}
        {isDeleteOpened && (
          <DeletePopup onSave={handleDelete} onClose={this.toggleDelete} />
        )}
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
