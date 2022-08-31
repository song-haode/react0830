import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    //获取用户输入
    const {
      // 解构赋值的连续写法
      keyWordelEment: { value:keyWord },//连续解构赋值并重命名
    } = this
    console.log(keyWord)
    // 发送网络请求

    
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordelEment = c)}
            type="text"
            placeholder="输入关键词点击搜索"
          />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
