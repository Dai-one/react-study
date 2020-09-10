import React from 'react'
import {NavLink} from 'react-router-dom'
import routes from '../../views'

export default class Aside extends React.Component{
  createNavLinks(){
    return routes.map(ele=>(
      <div key={ele.id} className="link-row">
        <NavLink 
          to={ele.path}
          activeClassName='on'
        >{ele.text}</NavLink>
      </div>
    ))
  }
  render(){
    return(
      <div className="ming-aside">
        {this.createNavLinks()}
      </div>
    )
  }
}