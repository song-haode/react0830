import React, { Component } from 'react'
import SonC from './components/SonC'
import SonF from './components/SonF'

export default class App extends Component {
  state = {
    message: 'this is massage',
   
  }

  //1. 准备一个函数传给子组件
  getSonList = (sonMsg) => {
    console.log('sonMsg',sonMsg);
    
  }
  render() {
    const { message } = this.state
    return (
      <div>
        {/* 在子组件身上绑定属性 属性名可以自定义 保持语义化 */}
        {/* 类子组件 */}
        <SonC msg={message}/>
        {/* 函数子组件 */}
        <SonF msg={message} getSonList ={this.getSonList} />
      </div>
    )
  }
}
