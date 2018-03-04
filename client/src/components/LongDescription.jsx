import React from 'react';
import PropTypes from 'prop-types';

const LongDescription = (({ description }) => (
  <div id="overview-long-description">
    {description}
  </div>
));


LongDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LongDescription;
