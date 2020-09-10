import React from 'react'


//表单使用
// value和onChange必须配合使用，那么这种表单就是受控表单
// 受控表单是单向绑定的
// 受控表单指的是，表单的value值由state来决定和控制

// 非受控表单，指的是它的value不受state控制
// React强烈建议，不要使用非受控表单
export default class TestForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'111',
      addr: '',
      fav:'2',
      info:{
        myName:'',
        myPhone:'',
        myPass:'',
        myFav:'1',
        myAgree:true,
        myGender:'1'
      }
    }
  }
  submit(){
    let data = {
      name: this.state.name,
      pass: document.getElementById('pass').value,
      phone: this.refs.phone.value,
      addr: this.state.addr,
      fav: this.state.fav,
    }
    console.log('表单取值',data)
    
  }
  nameChange(e){
    console.log('name',e.target.value)
    this.setState({
      name: e.target.value,
    })
  }
  addrInput(e){
    this.setState({
      addr: e.target.value
    })
  }
  favChange(e){
    console.log(e.target.value)
    this.setState({
      fav: e.target.value
    })
  }
  // *******************
  submit2(){
    console.log('data',this.state.info)
  }
  myChange(key,e){
    let { info } = this.state
    // console.log('agree',e.target.value,e.target.checked)
    if(key==='myAgree'){
      info[key] = e.target.checked
    }else{
      info[key] = e.target.value
    }
    this.setState({
      info: info
    })
    console.log(e.target.checked)
  }
  render(){
    let { name,fav, info } = this.state
    return(
      <div>
        <h2>测试表单</h2>
        {/* 受控表单:与state紧紧关联 */}
        <input 
          value={name}
          onChange={this.nameChange.bind(this)} 
          type="text"
        />
        <br/>
        {/* 非受控表单：与state无关 */}
        <input id="pass" type="text"></input>
        <br/>
        <input ref='phone' type="text"></input><br/>
        <input type="text" onInput={this.addrInput.bind(this)}/>
        {/* 唯一被支持的非受控表单 */}
        {/* 上传文件 */}
        <input type='file'/>
        <br/>
        {/* 受控表单 */}
        <select value={fav} onChange={this.favChange.bind(this)}>
          <option value="1">音乐</option>
          <option value="2">跑步</option>
          <option value="3">读书</option>
        </select>
        <br/>
        <button onClick={this.submit.bind(this)}>提交</button><br/>

        <div>
          <span>用户名：</span>
          <input value={info.myName} onChange={this.myChange.bind(this,'myName')} type="text"/>
        </div>
        <div>
          <span>密码：</span>
          <input value={info.myPass} onChange={this.myChange.bind(this,'myPass')} type="text"/>
        </div>
        <div>
          <span>手机：</span>
          <input value={info.myPhone} onChange={this.myChange.bind(this,'myPhone')} type="text"/>
        </div>
        <select value={info.myFav} onChange={this.myChange.bind(this,'myFav')}>
          <option value="1">音乐</option>
          <option value="2">跑步</option>
          <option value="3">读书</option>
        </select>
        <div>
          <span>性别：</span>
          <input 
          name='gender' 
          value='1' 
          checked={info.myGender==='1'}
          onChange={this.myChange.bind(this,'myGender')}
          type='radio'/>
          <span>男</span>
          <input 
          name='gender' 
          value='2' 
          checked={info.myGender==='2'}
          onChange={this.myChange.bind(this,'myGender')}
          type='radio'/>
          <span>女</span>
        </div>
        <div>
          <input checked={info.agree} onChange={this.myChange.bind(this,'myAgree')} type="checkbox"/>
          <span>是否同意该协议：</span>
        </div>
        <button onClick={this.submit2.bind(this)}>提交</button>
      </div>
    )
  }
}