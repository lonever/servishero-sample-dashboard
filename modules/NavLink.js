// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import { Item} from 'react-semantify'

export default React.createClass({
  render() {
    return <Link {...this.props} className="ui item" activeClassName="active"/>
  }
})
