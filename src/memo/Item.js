import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

class Item extends Component {
    
    constructor(props) {
        super(props);
        this.doDelete = this.doDelete.bind(this);
    }

    doDelete(num) {
        let action = deleteMemo(num);
        this.props.dispatch(action);
    }

    render() {
        return (
            <tr><th>{this.props.num}</th>
                <td>{this.props.value.memo}</td>
                <td>{this.props.value.createTime}</td>
                <td><input type="button" style={this.btn} value="Delete" onClick={()=> this.doDelete(this.props.num)} /></td>
            </tr>
        );
    }
}

export default connect((state) => state)(Item);
