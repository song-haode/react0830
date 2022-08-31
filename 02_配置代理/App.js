import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res=>{console.log('成功获取=>',res.data)},
      error=>{console.log('获取失败=>',error)}
    )
  }
  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res=>{console.log('成功获取=>',res.data)},
      error=>{console.log('获取失败=>',error)}
    )
  }
  

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据...</button>
        <button onClick={this.getCarData}>获取汽车数据...</button>
      </div>
    )
  }
}
