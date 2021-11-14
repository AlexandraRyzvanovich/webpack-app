import React from "react";

import PropTypes from "prop-types";
import CommonHeader from "./commonHeaderComponent";
import InfoHeader from "./infoHeaderComponent";

function HeaderContainer(props) {
  const { onOpen, onSearch, id, onClearSelection, movie } = props;
  if (movie.length == 0) {
    debugger;
    return <CommonHeader onOpen={onOpen} onSearch={onSearch} />;
  }
  debugger;
  return (
    <InfoHeader id={id} onClearSelection={onClearSelection} movie={movie} />
  );
}

HeaderContainer.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClearSelection: PropTypes.func.isRequired,
  id: PropTypes.number,
  onOpenSearch: PropTypes.func,
  movie: PropTypes.object,
};

export default HeaderContainer;
