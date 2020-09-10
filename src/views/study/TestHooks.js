// Hooks 实际上就是一套API
//useState
// useEffect componentDidMount + componentDidUpdate + componentWillUnmount
// useRef
// useContext

// 作用：让函数式组件（无状态组件）拥有状态。生命周期。上下文等特性
import React, { useState, useEffect } from 'react'

// 无状态组件
export default function TestHooks(props){
  let [count, setCount] = useState(1)
  let [list, setList ] = useState([])
  let timer = null
  // 修改count
  function changeCount(){
    count++
    setCount(count)
  }

  // useEffect(fn,[])
  // useEffect(()=>{
  //   // 调接口，开启websocket长连接，定时器
  //   console.log('mounted')
  //   return undefined
  // })
  useEffect(()=>{
    console.log(1)
    timer = setTimeout(()=>{
      setList([1,2,3,4])
    },10000)
    // 这个return，相当于 componeentWillUnmount 清除长连接，定时器
    return ()=>{
      clearTimeout(timer)
    }
    // 如果没有什么需要清除的东西的东西 return undefined
  })

  // componentDidUpdate
  useEffect(()=>{
    console.log('count发生了变化')
    return undefined
  },[count])

  function createList(){
    return list.map((ele)=>(
      <div key={ele}>{ele}</div>
    ))
  }

  return(
    <div>
      <h1>测试Hooks</h1>
      <h3>{count}</h3>
      <button onClick={changeCount}>点击</button>
      {createList()}
    </div>
  )
}