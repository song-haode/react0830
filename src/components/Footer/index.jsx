import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  render() {
    const { todos } = this.props

    // 已完成的个数
    const doneCount = todos.reduce((pre,todo)=> pre+ (todo.done? 1:0) ,0)
    console.log(doneCount);

    // 总数
    const total = todos.length
    
    return (
      <div className="todo-footer">
        <label>
          <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount ===total? true:false } />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button  className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
