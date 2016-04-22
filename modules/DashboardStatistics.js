import React from 'react'
import {Button, Statistic, Segment} from 'react-semantify';

export default React.createClass({
  render() {
    return (
      <div>
        <Segment>
          <h2><i className="icon calendar outline"></i>Today</h2>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon comment"></i>
                54
              </div>
              <div className="label">
                Requests
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon file text"></i>
                78
              </div>
              <div className="label">
                Quotes
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon checkered flag"></i>
                48
              </div>
              <div className="label">
                Fulfilled
              </div>
            </Statistic>
            <Statistic style={{marginLeft: "5em"}}>
              <div className="value">
                <i className="icon child"></i>
                2
              </div>
              <div className="label">
                Heroes Recruited
              </div>
            </Statistic>

        </Segment>
      </div>
    )
  }
})
