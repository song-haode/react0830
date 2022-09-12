import React from 'react'

// export default function SonF(props) {
//   const { getSonList } = props
//   const list = [1, 2, 3, 4, { name: '年末' }]
//   return (
//     <div>
//       我是函数子组件,{props.msg}
//       <button onClick={() => getSonList(list)}>按钮</button>
//     </div>
//   )
// }

// 改造传参写法
export default function SonF(props) {
  const { getSonList } = props
  const list = [1, 2, 3, 4, { name: '年末' }]
  // 在子组件 自定义函数,然后调用
  function UniSonF(){
    getSonList(list)
  }
  return (
    <div>
      我是函数子组件,{props.msg}
      <button onClick={UniSonF}>按钮</button>
    </div>
  )
}
