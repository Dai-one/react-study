import React from 'react'

export default class LiftA extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  onChildChange(e){
    console.log(this.props)
    this.props.onChange(e.target.value)
  }
  render(){
    let { msg } = this.props
    return(
      <div>
        <h3>我是A组件</h3>
        <input value={msg} onChange={this.onChildChange.bind(this)}/>
      </div>
    )
  }
}