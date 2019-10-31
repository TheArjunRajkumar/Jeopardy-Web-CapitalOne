import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import CategoryFilterComponent from './components/filter-component';

class App extends Component {
  render() {
    const countries = 
    [
      "Afghanistan",
      "Aland Islands",
      "Albania",
      "Algeria"
    ]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CategoryFilterComponent content={countries} />
        </header>
      </div>
    );
  }
}

export default App;
