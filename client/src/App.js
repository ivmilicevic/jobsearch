import React, { Component } from 'react';
import './App.css';

// Containers
import JobSearchView from './containers/JobSearchView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobSearchView />
      </div>
    );
  }
}

export default App;
