// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import { Item} from 'react-semantify'

export default React.createClass({
  render() {
    return (
      <Item className="dashboard-list-item">
        <i className={ "large icon " + this.props.iconColour + " " + this.props.icon }></i>
        <div className="content" style={{minWidth: "300px"}}>
          {this.props.serviceName}
          <div style={{float: "right"}}>
            {this.props.number}
          </div>
        </div>
      </Item>
    )
  }
})
