// modules/NavLink.js
import React from 'react'
import { Label } from 'react-semantify'

export default React.createClass({
  render() {
    switch(this.props.type) {
      case "request":
          return <Label className="teal">Request</Label>
          break
      case "quote":
          return <Label className="blue">Quote</Label>
          break
      case "fulfilled":
          return <Label className="green">Fulfilled</Label>
          break
      default:
          return <Label>UNKNOWN TAG</Label>
    }
  }
})
