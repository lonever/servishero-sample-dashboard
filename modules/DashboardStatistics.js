import React from 'react'
import {Button, Statistic, Segment} from 'react-semantify';

var statisticTextStyle = { fontWeight: "bold", textTransfrom: "uppercase", fontSize: "1em", color: "black" };
export default React.createClass({
  render() {
    return (
      <div>
        <Segment>
          <h2><i className="icon calendar outline"></i>Today</h2>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon comment"></i>
                {this.props.requestNumber}
              </div>
              <div style={ statisticTextStyle } className="label">
                REQUESTS
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon file text"></i>
                {this.props.quoteNumber}
              </div>
              <div style={ statisticTextStyle }  className="label">
                QUOTES
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon checkered flag"></i>
                {this.props.fulfilledNumber}
              </div>
              <div style={ statisticTextStyle }  className="label">
                FULFILLED
              </div>
            </Statistic>
            <Statistic style={{marginLeft: "5em"}}>
              <div className="value">
                <i className="icon child"></i>
                {this.props.heroNumber}
              </div>
              <div  style={ statisticTextStyle }  className="label">
                HEROES RECRUITED
              </div>
            </Statistic>

        </Segment>
      </div>
    )
  }
})
