import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stext: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      stext: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.stext);
    this.props.dispatch(action);
    this.setState({
      stext: ''
    });
  }

  render() {
    return (
      <div id="AddComponentDIV">
        <form onSubmit={this.doAction}>
          <input type="text" onChange={this.doChange}
            value={this.state.stext} required />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default connect((state) => state)(AddComponent);
