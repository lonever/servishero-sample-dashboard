import React from 'react'
import {Button, Statistic, Segment, Loader, List} from 'react-semantify';
import topWeeklyStats from './Mockdata/topWeekly'
import DashboardListItem from './DashboardListItem'

export default React.createClass({
  componentDidMount(){
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(()=>  {
      this.setState({
        topWeeklyStats: topWeeklyStats,
        loading: false}
      )
    }, 300)
  },
  render() {
    if (!this.state || this.state.loading) {
      return (
        <Segment style={{minHeight: "15em"}}>
          <h2>Top 3 Service Requests of the week</h2>
          <Loader style={{marginTop: "3em"}} className="active centered large"/>
        </Segment>
      )
    }
    var topWeeklyStats = this.state.topWeeklyStats
    return (
      <Segment>
        <h2>Top 3 Service Requests of the week</h2>
        <List className="divided">
          <DashboardListItem
            serviceName={topWeeklyStats["1"].serviceType}
            number={topWeeklyStats["1"].number}
            iconColour="blue"
            icon={topWeeklyStats["1"].icon}
          />
          <DashboardListItem
            serviceName={topWeeklyStats["2"].serviceType}
            number={topWeeklyStats["2"].number}
            iconColour="blue"
            icon={topWeeklyStats["2"].icon}
          />
          <DashboardListItem
            serviceName={topWeeklyStats["3"].serviceType}
            number={topWeeklyStats["3"].number}
            iconColour="blue"
            icon={topWeeklyStats["3"].icon}
          />
        </List>
      </Segment>
    )
  }
})
