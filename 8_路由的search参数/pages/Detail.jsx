import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  return (
    <ul>
      <li>消息的编号:{id}</li>
      <li>消息的标题: {title}</li>
      <li>消息的内容:{content}</li>
      <button onClick={() => setSearch('id=008&title=烦人&content=烦人修仙传')}>
        点我更新参数
      </button>
    </ul>
  )
}
