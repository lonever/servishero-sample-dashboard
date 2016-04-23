import React from 'react'
import { Statistic, Label, Message, List, Item, Segment, Header } from 'react-semantify'
import DashboardStatistics from './DashboardStatistics'
import DashboardListItem from './DashboardListItem'
import DashboardMessage from './DashboardMessage'
import topWeeklyStats from './Mockdata/topWeekly'


export default React.createClass({
  render() {
    return (
      <div>
        <DashboardStatistics />
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
        <DashboardMessage
          messageType="negative"
          icon="warning"
          rightText="21/4/2016 15:00"
        >
          Complaint filed against Hero <span className="name">Lims Home Cleaning</span>, please investigate asap!
        </DashboardMessage>
        <DashboardMessage
          messageType="positive"
          icon="child"
          rightText="21/4/2016 15:00"
        >
          Hero <span className="name">Ah Chong Personal Training</span> was recruited in <span className="name">Petaling Jaya</span>. Welcome!
        </DashboardMessage>

      </div>
    )
  }
})
