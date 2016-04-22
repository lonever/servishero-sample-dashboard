import React from 'react'
import {Button, Statistic, Segment} from 'react-semantify';

export default React.createClass({
  render() {
    return (
      <div>
        <Segment>
          <h2>Today</h2>
          <div className="ui statistics">
            <Statistic className="large">
              <div className="value">
                54
              </div>
              <div className="label">
                Requests
              </div>
            </Statistic>
            <Statistic className="large">
              <div className="value">
                78
              </div>
              <div className="label">
                Quotes
              </div>
            </Statistic>
            <Statistic className="large">
              <div className="value">
                48
              </div>
              <div className="label">
                Fulfilled
              </div>
            </Statistic>
          </div>
        </Segment>
      </div>
    )
  }
})
