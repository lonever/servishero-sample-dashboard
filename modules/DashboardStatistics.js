import React from 'react'
import {Button, Statistic, Segment, Loader} from 'react-semantify';
import dashboardStats from './Mockdata/dashboardStatistics'

var statisticTextStyle = { fontWeight: "bold", textTransfrom: "uppercase", fontSize: "1em", color: "black" };
export default React.createClass({
  componentDidMount(){
    this.setState({loading: true})
    //mock ajax request here
    setTimeout( () => {
      this.setState({requestNumber: dashboardStats.requests,
        quoteNumber: dashboardStats.quotes,
        fulfilledNumber: dashboardStats.fulfilled,
        heroNumber: dashboardStats.heroesRecruited,
        loading: false})
    }, 1000)
  },
  render() {
    if (!this.state || this.state.loading) {
      return (
        <Segment style={{minHeight: "15em"}}>
          <h2><i className="icon calendar outline"></i>Today</h2>
          <Loader style={{marginTop: "3em"}} className="active centered large"/>
        </Segment>
      )
    }
    return (
      <div>
        <Segment>
          <h2><i className="icon calendar outline"></i>Today</h2>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon comment"></i>
                {this.state.requestNumber}
              </div>
              <div style={ statisticTextStyle } className="label">
                REQUESTS
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon file text"></i>
                {this.state.quoteNumber}
              </div>
              <div style={ statisticTextStyle }  className="label">
                QUOTES
              </div>
            </Statistic>
            <Statistic style={{margin: "1.3em"}}>
              <div className="value">
                <i className="icon checkered flag"></i>
                {this.state.fulfilledNumber}
              </div>
              <div style={ statisticTextStyle }  className="label">
                FULFILLED
              </div>
            </Statistic>
            <Statistic style={{marginLeft: "5em"}}>
              <div className="value">
                <i className="icon child"></i>
                {this.state.heroNumber}
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
