import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
  // 简写函数封装
  // function computedClassName({ isActive }) {
  //   return isActive ? 'list-group-item atguigu' : 'list-group-item'
  // }

  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes)

  return (
    <div>
      <div className="row">
       <Header/>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接  简写函数封装: className={computedClassName}*/}
            <NavLink className="list-group-item " to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item " end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 1 注册路由  */}
              {/* <Routes>
                caseSensitive 区分路由的大小写 
                <Route path="/about" caseSensitive element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}
             
              {/* 2 注册路由  */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
