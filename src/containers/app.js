import React, { Component } from 'react';
import Page from '../components/page';
import PageList from '../components/page-list';
import Header from '../components/header';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <PageList />
      </div>
    )
  }
}

export default App;
