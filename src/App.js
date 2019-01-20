import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShoppingBasket from './components/ShoppingBasket';
import * as actions from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingBasket {...this.props}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect( mapStateToProps, mapDispatchToProps)(App);
