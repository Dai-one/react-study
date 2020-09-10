import React from 'react'

export default class TestLife extends React.Component{
  /* 挂载阶段 (常用三个)*/
  constructor(props){
    super(props)
    this.state={
      count: 1,
      aaa: 1,
    }
  }

  // 挂载已完成 mounted
  // 调接口，建立长连接，定时器
  componentDidMount(){
    console.log('componentDidMount')
  }
 
  countChange(){
    /* 第一种方法 */
    // this.setState((prevState)=>({
    //   count: prevState.count ++
    // }))
    /* 第二种方法 */
    this.setState(prevState=>{
      return {
        count: prevState.count ++
      }
    })
    /* 第三种方法 */
    // let { count } = this.state
    // count++
    // this.setState({
    //   count
    // })
  }
 /* 更新阶段 */
  //开关，控制视图是否更新
  // 用于性能优化
  shouldComponentUpdate(state){
    if(state.aaa){
      return false
    }else{
      return true
    }
    
  }
  // 视图更新已完成
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  /* 销毁阶段 */

  // 组件销毁之前，beforeDestroy
  // 清除定时器,清除长连接
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  // 所有生命周期中不能少
  // 组件初始化，组件更新时，都会触发
  render(){
    // console.log('render')
    let { count } = this.state
    return(
      <div>
        <h1>测试生命周期</h1>
        <h2>{count}</h2>
        <button onClick={this.countChange.bind(this)}>计数</button>
      </div>
    )
  }
}