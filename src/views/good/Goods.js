import React, { Component } from 'react'

export default class Goods extends Component {
  constructor(porps){
    super(porps)
    this.state = {
      list: [
        {id:1,name:'手机'},
        {id:2,name:'电脑'},
        {id:3,name:'鼠标'},
        {id:4,name:'电视'},
      ]
    }
  }
  skipToDetail(ele){
    console.log(ele)
    this.props.history.push('/good/detail/'+ ele.id+'/'+ele.name)
  }
  createGoodList(){
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id} onClick={this.skipToDetail.bind(this,ele)}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
  }
  render() {
    
    
    return (
      <div>
        <h1>商品列表</h1>
        {this.createGoodList()}
      </div>
    )
  }
}
