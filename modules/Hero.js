import React from 'react'

export default React.createClass({
  render() {
    const { heroId } = this.props.params
    return (
      <div>
        <h2>{heroId}</h2>
      </div>
    )
  }
})
