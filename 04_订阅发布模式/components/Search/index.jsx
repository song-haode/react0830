import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    const {
      // 解构赋值的连续写法
      keyWordelEment: { value: keyWord }, //连续解构赋值并重命名
    } = this
    console.log(keyWord)

    // 发送请求前通知List更新状态
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })

    // 发送网络请求
    axios
      .get(`http://localhost:3000/api1/search/users?q=${keyWord}`)
      .then((res) => {
        console.log('请求成功:', res.data)
        // 发送请求成功后通知List更新状态
        PubSub.publish('atguigu', { users: res.data.items, isLoading: false })
      })
      .catch((error) => {
        // 发送请求失败后通知List更新状态
        // isError:error.message React不可以直接存错误对象,要存错误对象的错误信息;
        PubSub.publish('atguigu', { isError: error.message, isLoading: false })
      })
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
