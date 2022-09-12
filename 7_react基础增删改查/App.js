import React, { Component } from 'react'
// import {nanoid} from 'nanoid' //更轻量
import { v4 as uuid } from 'uuid' //默认v4 重命名下

import './App.css'
import avatar from './images/avatar.png'
export default class App extends Component {
  // 依赖的数据
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: '刘德华',
        comment: '给我一杯忘情水',
        time: new Date('2021-10-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
      },
      {
        id: 2,
        author: '周杰伦',
        comment: '哎哟，不错哦',
        time: new Date('2021-10-11 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
      },
      {
        id: 3,
        author: '五月天',
        comment: '不打扰，是我的温柔',
        time: new Date('2021-10-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
      },
    ],
    comment: '请输入....', //评论框中的内容
  }

  // tab切换的回调
  switchTab = (type) => {
    console.log('切换', type)
    //实现思路:点击谁就把type属性交给state中的active
    this.setState({
      active: type,
    })
  }

  // 受控组件的回调
  textareaChange = (e) => {
    this.setState({
      comment: e.target.value,
    })
  }

  // 发表评论的回调
  sumitComment = () => {
    // 提交评论 state.list 后边添加新的评论
    this.setState({
      list: [
        ...this.state.list,
        {
          id: uuid(),
          author: 'cp',
          comment: this.state.comment,
          time: this.getmyDate(new Date()),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 0,
        },
      ],
    })
  }

  //删除的回调  一般使用 filter
  delComment = (id) => {
    return () => {
      this.setState({
        list: this.state.list.filter((item) => {
          return item.id !== id
        }),
      })
    }
  }

  // 切换喜欢
  toggleLike = (cutItem) => {
    // 1: 点赞 0：无态度 -1:踩  attitude
    const { attitude, id } = cutItem
    //更新数据
    this.setState({
      list: this.state.list.map((item) => {
        // 判断条件 如果item.id === id 把item的attitu de属性修改下
        // 否则就原样
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1,
          }
        } else {
          return item
        }
      }),
    })
  }

  // 切换不喜欢
  toggleHate = (itemHate) => {
    const { attitude, id } = itemHate
    //更新数据
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === -1 ? 0 : -1,
          }
        } else {
          return item
        }
      }),
    })
  }

  getmyDate() {
    const date = new Date() 
    
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString()
    const day = date.getDate().toString()
    const hour = date.getHours().toString()
    const minute = date.getMinutes().toString()
    return `${year}年${month}月${day}日${hour}:${minute}`
  }

  render() {
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>5 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {this.state.tabs.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={item.type === this.state.active ? 'on' : ''}
                    onClick={() => this.switchTab(item.type)}
                  >
                    按{item.name}排序
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 添加评论 */}
          <div className="comment-send">
            <div className="user-face">
              <img className="user-head" src={avatar} alt="" />
            </div>
            <div className="textarea-container">
              <textarea
                cols="80"
                rows="5"
                placeholder="发条友善的评论"
                className="ipt-txt"
                value={this.state.comment}
                onChange={this.textareaChange}
              />
              <button className="comment-submit" onClick={this.sumitComment}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {this.state.list.map((item) => {
              return (
                <div key={item.id} className="list-item">
                  <div className="user-face">
                    <img className="user-head" src={avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{this.getmyDate()}</span>
                      <span
                        onClick={() => this.toggleLike(item)}
                        className={item.attitude === 1 ? 'like liked' : 'like'}
                      >
                        <i className="icon" />
                      </span>

                      <span
                        onClick={() => this.toggleHate(item)}
                        className={item.attitude === -1 ? 'hate hated' : 'hate'}
                      >
                        <i className="icon" />
                      </span>
                      <span
                        className="reply btn-hover"
                        onClick={this.delComment(item.id)}
                      >
                        删除
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
