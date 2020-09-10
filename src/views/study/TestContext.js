import React from 'react'
import { Child3 } from '../../components'

// Context上下文
/* 作用:解决层级较深的间接父子组件之间的数据传递问题,以避免繁琐的props传递 */
export default class TestContext extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <div>
        <h1>测试上下文</h1>
        <Child3 />
      </div>
    )
  }
}