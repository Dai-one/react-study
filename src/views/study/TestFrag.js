import React from 'react'

export default class TestFrag extends React.Component{
  render(){
    return(
      // 第一种方法
      // <>
      // <div>
      //   <h1>测试碎片</h1>
      // </div>
      // <div>

      // </div>
      // </>
      // 第二种方法
      <React.Fragment>
        <div>
        <h1>测试碎片</h1>
      </div>
      <div>
        
      </div>
      </React.Fragment>
    )
  }
}