import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    // <div>
    //   <h3>我是Home的内容</h3>
    //   {/* replace={true} 如果为true 就不会留下路由历史记录
    //   {sum === 2 ? <Navigate to="/about" replace={true} /> : <h4>当前sum的值是:{sum}</h4>}
    //   <button onClick={() => setSum(2)}>点我将sum变为2</button> */}
    // </div>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item " to="message">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
