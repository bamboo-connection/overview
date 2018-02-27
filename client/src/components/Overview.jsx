import React from 'react';
import axios from 'axios';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Hello World',
    };
  }

  componentDidMount() {
    axios.get('/restaurants/124')
      .then((response) => {
        console.log(response);
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

export default Overview;
