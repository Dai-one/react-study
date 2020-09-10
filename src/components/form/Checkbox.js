import React from 'react'

export default class Checkbox extends React.Component{
  render(){
    return (
      <div className='checkbox'>
        <input type='checkbox'/><span>读书</span>
        <input type='checkbox'/><span>读书</span>
        <input type='checkbox'/><span>读书</span>
        <input type='checkbox'/><span>读书</span>
        <input type='checkbox'/><span>读书</span>
      </div>
    )
  }
}