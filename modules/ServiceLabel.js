// modules/NavLink.js
import React from 'react'
import { Label } from 'react-semantify'

export default React.createClass({
  render() {
    switch(this.props.type) {
    case "cleaning-home":
        return <Label className="blue">Cleaning(home)</Label>
        break
    case "cleaning-commercial":
        return <Label className="green">Cleaning(commercial)</Label>
        break
    case "moving":
        return <Label className="orange">Moving</Label>
        break
    case "karate":
        return <Label className="red">Karate</Label>
        break
    case "personal-training":
        return <Label className="orange">Personal Training</Label>
        break
    case "yoga":
        return <Label className="teal">Yoga</Label>
        break
    case "swimming":
        return <Label className="blue">Swimming</Label>
        break
    default:
        return <Label>UNKNOWN SERVICE</Label>
    }
  }
})
