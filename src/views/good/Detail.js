import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <h1>商品详情</h1>
        <h3>{this.props.match.params.id}</h3>
        <h3>{this.props.match.params.name}</h3>
      </div>
    )
  }
}
