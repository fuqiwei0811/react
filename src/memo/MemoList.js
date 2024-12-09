import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';

class MemoList extends Component {

    render() {
        let data;

        if (this.props.mode === 'search') {
            data = this.props.fdata.map((element, index) => (
                <Item key={index} num={index} value={element} />
            ));
        } else {
            data = this.props.data.map((element, index) => (
                <Item key={index} num={index} value={element} />
            ));
        }

        return (
            <div id="memoListDIV">
                <hr />
                <table>
                    <thead>
                        <tr><th>No</th>
                            <td>Memo</td>
                            <td>Timestamp</td>
                            <td>Operation</td>
                        </tr>
                    </thead>
                    <tbody>{data}</tbody>
                </table>
            </div>
        );
    }
}
export default connect((state) => state)(MemoList);
