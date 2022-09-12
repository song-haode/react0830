import React from 'react'
import ReactDOM from 'react-dom/client'
// 全局包裹路由器
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
