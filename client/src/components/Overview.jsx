import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantTitle: 'Title Placeholder',
      restaurantTagline: 'Tagline Placeholder',
    };
  }

  componentDidMount() {
    const id = this.props.ids[Math.floor(Math.random() * this.props.ids.length)];
    axios.get(`/restaurants/${id}`)
      .then((response) => {
        this.handleRestaurantChange(response.data[0]);
      })
      .catch((err) => {
        throw err;
      });
  }

  handleRestaurantChange(restaurantDetails) {
    this.setState({
      restaurantTitle: restaurantDetails.name,
      restaurantTagline: restaurantDetails.tagline,
    });
  }

  render() {
    return (
      <div id="overview-wrapper">
        <div id="overview-restaurant-title">{this.state.restaurantTitle}</div>
        <div id="overview-restaurant-tagline">{this.state.restaurantTagline}</div>
      </div>
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
