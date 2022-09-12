import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { id, title, conternt } = useParams()
  return (
    <ul>
      <li>消息的编号:{id}</li>
      <li>消息的标题:{title}</li>
      <li>消息的内容:{conternt}</li>
    </ul>
  )
}
