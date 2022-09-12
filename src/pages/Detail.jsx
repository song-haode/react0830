import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const {
    state: { id, title, content },
  } = useLocation()
  return (
    <ul>
      <li>消息的编号:{id}</li>
      <li>消息的标题:{title}</li>
      <li>消息的内容:{content}</li>
    </ul>
  )
}
