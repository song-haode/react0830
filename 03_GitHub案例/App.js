import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  // 初始化状态
  state = { 
    users: [],
    isFirst:true,//是否第一次打开
    isLoading:false,//是否在加载
    isError:''//存储请求相关的错误信息
  }

  // 更新App的state
  upDateAppState = (stateObj)=>{
    // stateObj本身就是个对象,更新时不用写对象;
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search upDateAppState={this.upDateAppState}/>
        <List {...this.state} />
      </div>
    )
  }
}
