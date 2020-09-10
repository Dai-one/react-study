import React from 'react'

// 列表渲染
// map() 箭头函数   循环当前元素 下标从0 arr,原数组
// arr.map(function(ele,index,array){})
/* (ele,idx,abc)=>{
      语句
      ele.checked = true
      return ele
    }
    (ele,idx,abc)=>(ele) 括号里面是表达式 例如：ele.id 
 */

//  如果被渲染的数组需要做一定数据处理，建议封装方法是来实现
// 如果被渲染的数组比较简单，可以直接在render的return中写
export default class TestList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list : [
        {id: 1, name:'lisi'},
        {id: 2, name:'zhangsan'},
        {id: 3, name:'wangwu'},
        {id: 4, name:'zhaoliu'},
        {id: 5, name:'wuqi'},

      ]
    }
  }

  /* 路由
  react-router-dom */

  createList1(){
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id}>
              <span>{ele.id}</span>
              <span>-</span>
              <span>{ele.name}</span>
            </div>
    ))
  }

  createList2(){
    let { list } = this.state
    let arr = []
    list.map(ele=>{
      // 这里写语句,做数据处理
      ele.grade = '2004'
      arr.push(<div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
        <span>-</span>
        <span>{ele.grade}</span>
      </div>)
      return null
    })
    return arr
  }
  render(){
    let { list } = this.state
    let list2 = list.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>-</span>
        <span>{ele.name}</span>
      </div>
    ))
    return(
      <div>
        <h2>测试列表渲染</h2>
        {
          list.map(ele=>(
            <div key={ele.id}>
              <span>{ele.id}</span>
              <span>-</span>
              <span>{ele.name}</span>
            </div>
          ))
        }
        <hr></hr>
        {this.createList1()}

        <hr></hr>
        {this.createList2()}

        <hr></hr>
        { list2 }
      </div>
    )
  }
}