import React from 'react'

import ThemeCtx from '../../utils/theme'

class Child3 extends React.Component{
  render(){
    console.log(this.context)
    const ctx = this.context
    return (
      <div style={{color:ctx.color,background:ctx.background}}>
        <h3>我是子组件</h3>
      </div>
    )
  }
}

// 添加上下文
Child3.contextType = ThemeCtx

export default Child3

