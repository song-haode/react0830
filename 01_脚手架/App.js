import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import List from './components/List'
import './App.css'
export default class App extends Component {
  // 状态在哪里,操作状态的方法就在那里

  // 初始化状态
  state = {
    todos: [
      { id: 1, name: '韩立', done: true },
      { id: 2, name: '历飞雨', done: true },
      { id: 3, name: '打代码', done: false },
    ],
  }
  //添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const { todos } = this.state
    // 追加一个todo
    const newTodoObj = [todoObj, ...todos]
    // 更新状态
    this.setState({ todos: newTodoObj })
  }

  //更新一个todo对象 并传给 孙组件 Item
  upDataTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })

    this.setState({ todos: newTodos })
  }

  //删除一个todo对象 并传给 孙组件 Item
  deleteTodo = (id) => {
    //获取原来的todo
    const { todos } = this.state
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // 全选勾选框状态
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodoObj = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todos: newTodoObj })
  }

  // 清除全部完成的
  clearAllDone = ()=>{
    // 获取原来的todos
    const {todos} = this.state;
    // 过滤数据
   const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done;
    })
    // 更新数据
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              upDataTodo={this.upDataTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}
