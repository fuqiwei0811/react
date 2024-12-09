import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MemoList from './memo/MemoList';
import InfoComponent from './memo/InfoComponent';
import AddComponent from './memo/AddComponent';
import SearchComponent from './memo/SearchComponent';


// Appコンポーネント
class App extends Component {
  render() {
    return (
      <div id='rootDIV'>
        <header>Memo List</header>
        <InfoComponent />
        <AddComponent />
        <SearchComponent />
        <MemoList />
      </div>
    );
  }
}

export default connect()(App);