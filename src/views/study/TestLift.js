import React from 'react'
import { LiftA, LiftB } from '../../components'

// 状态提升,实际上解决是组件之间的数据通信问题
// 状态是最原始的数据共享解决方案,在react诞生还没有成熟的状态管理工具

// prop-types组件的props类型检查
/* npm i prop-types -S
  import PropTypes from 'prop-types'
*/
export default class TestLift extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg:''
    }
  }
  onChange(arg){
    this.setState({
      msg:arg
    })
  }
  render(){
    let { msg } = this.state
    return(
      <div>
        <h1>测试状态提升</h1>
        <LiftA msg={msg} onChange={this.onChange.bind(this)}/>
        <hr></hr>
        <LiftB msg={msg}/>
      </div>
    )
  }
}