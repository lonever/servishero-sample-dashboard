import React from 'react'

export default React.createClass({
  render() {
    const { clientId } = this.props.params
    return (
      <div>
        <h2>{clientId}</h2>
      </div>
    )
  }
})
