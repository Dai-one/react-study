import React from 'react'
import hoc from '../../utils/hoc'


// @hoc  修饰器：修改一个类，修饰一个方法
class TestHoc extends React.Component{
  render(){

    return(
      <div>
        <h1>测试高阶组件</h1>
      </div>
    )
  }
}

export default hoc(TestHoc)