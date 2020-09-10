import React from 'react'

export default class Child2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      list:[
        {id:1, name:'中文'},
        {id:2, name:'英文'},
        {id:3, name:'日语'},
        {id:4, name:'德语'}
      ]
    }
  }
  langHandle(id){
    // 触发父组件传递过来的自定义事件
    // 同时向父组件发消息
    this.props.onChange(id)
  }
  createList(){
    let { list } = this.state
    let { lang1 } = this.props
    return list.map(ele=>(
      <span 
        className={lang1===ele.id ?'on' : ''} 
        onClick={this.langHandle.bind(this,ele.id)}
        key={ele.id}>
        {ele.name}
      </span>
    ))
  }
  render(){
    return(
      <div className="language">
        {this.createList()}
      </div>
    )
  }
}