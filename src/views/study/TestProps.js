import React from 'react'
import { Child1 } from '../../components'
export default class TestProps extends React.Component{
  constructor(props){
    super(props)
    //在这里声明的变量一旦发生变化，视图自动更新（单向绑定）
    this.state = {
      msg:'hello react',
      bbb:'bbb',
    }
  }
  // 自定义方法
  changeMsg(){
    let num = Math.random()
    // 这个方法是异步的
    // setstate()可以接受第二个参数，是一个函数，表示当前异步任务完成的回调
    this.setState({msg: num},()=>{
      console.log('更新已完成 ')
    })
  }
  render(){
    let { msg, bbb} = this.state
    msg += '!!!!!'
    return (
      <div>
        <h2>测试state和props</h2>
        <h3>
          {msg}
          <button onClick={this.changeMsg.bind(this)}>改变msg</button>
          {/* aaa是静态传值,bb是动态传值 */}
          <Child1 aaa='aaaa' bb={bbb}>
            <a href="https://baidu.com">百度</a><br />
            <a href="https://baidu.com">小米</a>
          </Child1>

        </h3>
      </div>
    )
  }
}