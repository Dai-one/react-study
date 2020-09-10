import React from 'react'
import '../../assets/css/common.scss'

// 函数式组件（无状态组件）
// 它没有状态state
// 它没有生命周期,不能使用render
// 它唯一的好处是性能好,这是react性能优化的方式之一

// props 是父子组件纽带
// props 是只读的,不能改
// props不能赋值给state,这两个没有关系,不能相互赋值 
export default function Child1(props){
  return (
    <div className='child'>
      <h2>{props.aaa}</h2>
      <h2>{props.bb}</h2>
      {/* 父组件传递过来的是数组形式 */}
      {props.children}
    </div>
  )
}

