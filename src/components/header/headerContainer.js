import React from "react";

import PropTypes from "prop-types";
import CommonHeader from "./commonHeaderComponent";
import InfoHeader from "./infoHeaderComponent";

function HeaderContainer(props) {
  const { onOpen, id, onClearSelection, movie, onOpenCommonHeader } = props;
  if (onOpenCommonHeader || onOpenCommonHeader === undefined) {
    return <CommonHeader onOpen={onOpen} />;
  }
  return (
    <InfoHeader id={id} onClearSelection={onClearSelection} movie={movie} />
  );
}

HeaderContainer.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  id: PropTypes.number,
  movie: PropTypes.array.isRequired,
  onOpenCommonHeader: PropTypes.bool.isRequired,
  onClearSelection: PropTypes.func.isRequired,
};

export default HeaderContainer;
