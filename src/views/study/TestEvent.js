import React from 'react'

// 事件绑定的三种写法(两种方式)
// bind() 方式绑定
// 箭头函数的绑定

// 如何那事件对象
// bind()方式绑定时,事件对象就是对事件函数的最后一个参数
// 箭头函数方式绑定时,要手动传递事件对象 {(e)=>this.eventHandle(e)}

// 如何阻止默认事件?阻止冒泡?
// 跟ES5的原生写法一样

// 如何监听表单的键盘事件?
// 绑定onkeyUp事件,使用 e.keyCode 来区分哪个键盘

// 时间如何传参?
// bind()方式绑定,this.clickHandle.bind(this,'arg1','arg2')
// 箭头函数方式绑定,(e)=>this.clickHandle('arg1',e)

export default class TestEvent extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.clickHandle2 = this.clickHandle.bind(this,'333')
  }
  clickHandle(arg,e){
    console.log('click!!',arg,e)
    console.log('this',this)
  }
  linkHandle(e){
    // 阻止默认事件
    e.preventDefault()
  }
  inputHandle(e){
    console.log(e.keyCode)
    if(e.keyCode === 13){
      console.log('提交表单')
    }
  }
  render(){
    return(
      <div>
        <h1>测试事件</h1>
        {/* 第一种绑定方法 */}
        <div onClick={this.clickHandle.bind(this,'111','222')}>事件绑定1</div>
        {/* 第二种 */}
        <div onClick={this.clickHandle2}>事件绑定2</div>
        {/* 第三种 */}
        <div onClick={(e)=>this.clickHandle('444',e)}>事件绑定3</div>

        {/* 阻止默认事件 */}
        <a href="https://baidu.com" onClick={this.linkHandle.bind(this)}>百度</a>

        {/* 获取键盘事件 */}
        <input type="text" onKeyUp={this.inputHandle.bind(this)}></input>
      </div>
    )
  }
}