import React, { Component } from 'react';
import './App.css';
import logo from './jeopardy.png'
import CategoryFilterComponent from './components/filter-component';
import { Container, Header } from 'semantic-ui-react';

// Settings for stylizing category dropdown
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
  render() {
    return (
      <Container style={{ margin: 20 }}>
        <img src={logo} alt='Jeopardy' className='App-logo' />
        <Header as="h3">Start typing in a category or select one</Header>
        <CategoryFilterComponent/>
      </Container>
    );
  }
}

export default App;