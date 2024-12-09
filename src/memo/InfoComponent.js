import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoComponent extends Component {

  render() {
    return (
      <p>{this.props.information}</p>
    );
  }
}
export default connect((state) => state)(InfoComponent);
