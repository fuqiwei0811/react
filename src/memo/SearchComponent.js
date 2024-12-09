import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMemo } from './Store';


class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stext: ''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
        this.doClear = this.doClear.bind(this);
    }


    doChange(e) {
        this.setState({
            stext: e.target.value
        });
    }


    doAction(e) {
        e.preventDefault();
        let action = searchMemo(this.state.stext);
        this.props.dispatch(action);
    }

    doClear(e) {
        this.setState({
            stext: ''
        });
        let action = searchMemo('');
        this.props.dispatch(action);
    }

    render() {
        return (
            <div id="SearchComponentDIV">
                <form onSubmit={this.doAction}>
                    <input type="text" onChange={this.doChange}
                        value={this.state.stext} required />
                    <input type="submit" value="Search" />
                    <input type="button" value="Clear" onClick={this.doClear} />
                </form>
            </div>
        );
    }
}
export default connect((state) => state)(SearchComponent);
