import React from 'react'


// 条件渲染
// 意思是在特定条件下会被显示，渲染出来的视图
// v-show v-if

// 工作中的四种方法
// 1. &&
// 2. 三目运算符
// 3. switch
// 4. display
export default class TestCondition extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bol1: true,
      bol2:false,
      bol3:3,
      dis: 'block',
    }
  }

  // 使用switch实现条件渲染，性能更高
  createView(){
    let { bol3 } = this.state
    let ele = null
    switch(bol3){
      case 1:
        ele = <div>444444</div>
        break;
      case 2:
        ele = <div>5555555</div>
        break;
      case 3:
        ele = <div>6666666</div>
        break;
      case 4:
        ele = <div>7777777</div>
        break;
    }
    return ele
  }
  render(){
    let { bol2, bol1, dis } = this.state
    return(
      <div>
        <h2>测试条件渲染</h2>
        { bol1 && <div>111111</div>}
        { bol2 && <div>222222s</div>}
        { !bol2 && <div>33333333</div>}
        <hr></hr>
        { bol2 ? <div>222222s</div> : <div>33333333</div>}
        <hr></hr>

        { this.createView() }
        <hr></hr>
        
        <div style={{display:dis}}>9999999</div>
      </div>
    )
  }
}