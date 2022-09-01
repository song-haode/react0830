import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  // avatar_url   头像
  // login        名字
  // html_url     个人主页
  // 初始化状态
  state = {
    users: [],
    isFirst: true, //是否第一次打开
    isLoading: false, //是否在加载
    isError: '', //存储请求相关的错误信息
  }
  componentDidMount(){
   this.token = PubSub.subscribe('atguigu', (_,stateObj) => {
      this.setState(stateObj)
    })
  }
  // 组件销毁取消订阅发布模式
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const { users, isFirst, isLoading, isError } = this.state
    return (
      <div className="row">
        {isFirst ? (
          <h2>欢迎使用,请输入关键字,随后点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading.......</h2>
        ) : isError ? (
          <h2 style={{ color: 'red' }}>{isError}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    alt=""
                    src={userObj.avatar_url}
                    style={{ width: '100px' }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
