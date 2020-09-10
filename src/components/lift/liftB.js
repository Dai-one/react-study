import React from 'react'
import PropTypes from 'prop-types'

class LiftB extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    let { msg } = this.props
    return(
      <div>
        <h3>我是B组件</h3>
        {msg}
      </div>
    )
  }
}
LiftB.propTypes = {
  msg: PropTypes.string.isRequired
}
export default LiftB