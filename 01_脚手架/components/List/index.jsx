import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  // 对接收的props进行:类型 必要限制
  static propTypes = {
    todos:PropTypes.array.isRequired,
    upDataTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  render() {
    
    const { todos, upDataTodo,deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return <Item key={todo.id} {...todo} upDataTodo={upDataTodo} deleteTodo={deleteTodo}/>
        })}
      </ul>
    )
  }
}
