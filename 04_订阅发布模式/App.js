import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // 更新App的state
  // upDateAppState = (stateObj)=>{
  //    stateObj本身就是个对象,更新时不用写对象;
  //   this.setState(stateObj)
  // }
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}
