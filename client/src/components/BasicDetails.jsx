import React from 'react';
import PropTypes from 'prop-types';

const BasicDetails = (({ type, vicinity, priceLevel }) => (
  <div id="overview-basic-details">
    <div className="overview-basic-details-specific">{type}
      <span className="overview-middot">·</span>
    </div>
    <div className="overview-basic-details-specific">{vicinity}
      <span className="overview-middot">·</span>
    </div>
    <div className="overview-basic-details-specific">{priceLevel}</div>
  </div>
));


BasicDetails.propTypes = {
  type: PropTypes.string.isRequired,
  vicinity: PropTypes.string.isRequired,
  priceLevel: PropTypes.string.isRequired,
};

export default BasicDetails;
