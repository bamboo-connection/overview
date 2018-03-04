import React from 'react';
// import PropTypes from 'prop-types';
import weGotLogo from '../../../WeGot_small_logo.png';

const DividerLine = () => (
  <div id="overview-divider-line">
    <hr id="overview-hline" />
    <img id="logo" alt="wegot-logo" src={weGotLogo} />
  </div>
);


// DividerLine.propTypes = {
//   type: PropTypes.string.isRequired,
//   vicinity: PropTypes.string.isRequired,
//   priceLevel: PropTypes.string.isRequired,
// };

export default DividerLine;
