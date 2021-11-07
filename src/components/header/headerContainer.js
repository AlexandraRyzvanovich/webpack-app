import React from "react";

import PropTypes from "prop-types";
import CommonHeader from "./commonHeaderComponent";
import InfoHeader from "./infoHeaderComponent";

function HeaderContainer(props) {
  const { onOpen, onSearch, id, onClearSelection } = props;
  if (!id) {
    return <CommonHeader onOpen={onOpen} onSearch={onSearch} />;
  }
  return <InfoHeader id={id} onClearSelection={onClearSelection} />;
}

HeaderContainer.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClearSelection: PropTypes.func.isRequired,
  id: PropTypes.number,
  onOpenSearch: PropTypes.func,
};

export default HeaderContainer;
