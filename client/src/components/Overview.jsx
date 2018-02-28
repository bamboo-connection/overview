import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hello World',
    };
  }

  componentDidMount() {
    const id = this.props.ids[Math.floor(Math.random() * this.props.ids.length)];
    axios.get(`/restaurants/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="top">{this.state.hello}</div>
    );
  }
}


// This main app renders all other pieces.small components in addition to 3 key pieces:
// 1) Restaurant Title
// 2) Restaurant Tagline
// 3) The WeGot divider line

Overview.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Overview;
