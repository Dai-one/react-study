import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

import routes from '../../views'

class Main extends React.Component{
  createRoutes(){
    let arr = []
    routes.map(ele=>{
      arr.push(<Route 
        key={ele.id}
        path={ele.path}
        component={ele.component}
        exact
      />)
      if(ele.children){
        ele.children.map(ele=>{
          arr.push(<Route 
            key={ele.id}
            path={ele.path}
            component={ele.component}
            exact
          />)
          return null
        })
      }
      return null
    })
    return arr
  }
  render(){
    return(
      <div className="ming-main">
        <Switch>
          {this.createRoutes()}
          {/* 重定向 */}
          <Redirect from='/*' to='/event' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main)