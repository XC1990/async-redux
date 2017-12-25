import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import ButtonCon from './components/Button'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ButtonCon/>
      </div>
      </Provider>
    );
  }
}

export default App;
