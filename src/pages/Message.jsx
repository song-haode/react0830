import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: '10', title: '消息1', content: '锄禾日当午' },
    { id: '20', title: '消息2', content: '汗滴禾下土' },
    { id: '30', title: '消息3', content: '谁知盘中餐' },
    { id: '40', title: '消息4', content: '粒粒皆辛苦' },
  ])
  const navigate = useNavigate()
  function showDetail(m) {
    navigate('detail', {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content,
      },
    })
  }
  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            <li key={m.id}>
              <Link
                to="detail"
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content,
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
