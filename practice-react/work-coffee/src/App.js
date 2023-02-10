import './App.css';
import React, { Component } from 'react'
import Main from './components/Main/main';
import Coffee from './components/Coffee/Coffee';
import Goods from './components/Goods/Goods';
import CoffeeItems from './components/CoffeeItems/CoffeeItems';


export class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Coffee />
        <Goods />
        <CoffeeItems/>
      </div>
    )
  }
}

export default App
