import React from 'react'

export default React.createClass({
  render() {
    const { requestId } = this.props.params
    return (
      <div>
        <h2>{requestId}</h2>
      </div>
    )
  }
})
