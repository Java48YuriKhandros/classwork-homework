import React, { Component } from 'react'
import './App.css'
import Body from './Body'
import Nav from './Nav'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:{
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
       },
       stats:{
        followers: 1000,
        following: 100
       }
    }
  }
  
  render() {
    return (
      <div className='app'>
        <Nav user={this.state.user}/>
        <Body user={this.state.user} stats={this.state.stats}/>
      </div>
    )
  }
}
