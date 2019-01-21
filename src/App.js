import React, { Component } from 'react';
import './App.css';

import ShoppingBasket from './components/ShoppingBasket';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingBasket />
      </div>
    );
  }
}

export default App;
