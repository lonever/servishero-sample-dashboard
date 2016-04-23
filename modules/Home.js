import React from 'react'
import { Statistic, Label, Message, List, Item, Segment, Header } from 'react-semantify'
import DashboardStatistics from './DashboardStatistics'
import DashboardListItem from './DashboardListItem'
import DashboardMessage from './DashboardMessage'
import topWeeklyStats from './Mockdata/topWeekly'
import DashboardTopWeeklyService from './DashboardTopWeeklyService'


export default React.createClass({
  render() {
    return (
      <div>
        <DashboardStatistics />
        <DashboardTopWeeklyService />
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
