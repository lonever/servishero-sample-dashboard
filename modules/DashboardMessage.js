// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import { Message } from 'react-semantify'

export default React.createClass({
  render() {
    return (
      <Message className={this.props.messageType}>
        <i className={ "large icon " + this.props.icon }></i>
          {this.props.children}
          <span style={{float:"right", fontWeight: "bold"}}>{this.props.rightText}</span>
      </Message>
    )
  }
})
