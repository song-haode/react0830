import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: '10', title: '消息1', conternt: '锄禾日当午' },
    { id: '20', title: '消息2', conternt: '汗滴禾下土' },
    { id: '30', title: '消息3', conternt: '谁知盘中餐' },
    { id: '40', title: '消息4', conternt: '粒粒皆辛苦' },
  ])
  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`detail/${m.id}/${m.title}/${m.conternt}`}>
                {m.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
