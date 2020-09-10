import React from 'react'
import { Child2 } from '../../components'

// 父子组件通信
// 父传值,使用props
// 子传父,使用自定义事件    

export default class TestLanguage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lang:1
    }
    
  }
  langChange(id){
    console.log('父',id)
    this.setState({
      lang: id
    })
  }
  render(){
    let { lang } = this.state
    return(
      <div>
        <h2>测试父子组件通信</h2>

        {/* lang1是自定义事件,子组件通过props.lang1 来取值 */}
        {/* onChange是自定义事件,子组件通过 this.props.onChange('arg')来触发,向父组件传值 */}
        <Child2 lang1={lang} onChange={this.langChange.bind(this)}/>
      </div>
    )
  }
}