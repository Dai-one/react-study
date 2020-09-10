// react 中有多少种定义方式
// 类组件
// 函数组件（无状态组件）
// ES5组件 React.createElement()
// Hooks组件
// 高阶组件

// 什么是jsx？
// jsx就是一个变量
// jsx也是一个对象
// jsx中可以使用静态属性属性
// jsx中可以使用属性动态属性
// jsx本身就是表达式，它的内部还可以使用表达式(用大括号包裹)
// jsx可以任意嵌套
// jsx中的注释也是变量，所以也用大括号包裹
// jsx中可防注入攻击，随意使用用户的输入

// import React, {Component} from 'react'
import React from 'react'
// import '../assets/css/common.sass'


// const ele1 = <span>我是span</span>
const ele = <h2>我是一个jsx变量</h2>
export default class TestJsx extends React.Component {
  constructor(props){
    super(props)
    // 声明式变量定义的地方
    this.state={
      msg:'hello msg jsx',
      color:'red',
      style:{color:'gray',fontSize:'50px'}
    }
  }
  createChild(){
    return (
      <div>
        <span>我是一个span</span>
        {ele}
      </div>
    )
  }
  ChangeColor(){
    this.setState({
      color:'blue'
    })
  }
  render(){
    return (
      <div>
        <h2>测试jsx</h2>
        {ele}
        {/* 这是注释 */}
        <h2 title="jsx">给jsx变量添加静态属性</h2>
        <h2 className={this.state.color}>给jsx变量添加动态属性</h2>
        <button onClick={this.ChangeColor.bind(this)}>改变颜色</button>
        <h2>{this.state.msg}</h2>
        <h2>{this.createChild()}</h2>
        <h2 style={{color:'orange',fontSize:'20px'}}>绑定静态的style</h2>
        <h2 style={this.state.style}>绑定动态style样式</h2>
      </div>
    )
  }
}