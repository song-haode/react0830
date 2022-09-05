import React, { Component } from 'react'

export default class SonC extends Component {
  render() {
    return (
      <div>
        {/* 类组件需要 this.props 获取父组件过来的值 */}
         我是类子组件 ,{this.props.msg}
      </div>
    )
  }
}
