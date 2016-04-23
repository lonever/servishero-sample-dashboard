import React from 'react'
import { Segment, List, Item } from 'react-semantify'
import { Link } from 'react-router'
import clients from './Mockdata/clients'
import ServiceLabel from './ServiceLabel'

var ClientListItem = React.createClass({
  render() {
    return (
      <Item>
        <div className="header"><Link to={ "clients/" + this.props.id }>{ this.props.client.name }</Link></div>
        { this.props.client.serviceRequests.map((service, i)=> {
          return (  <ServiceLabel key={i} type={service}/>)
        })}
      </Item>
    )
  }
})

export default React.createClass({
  render() {
    return (
      <Segment>
        <List className="divided">
          {Object.keys(clients).map((clientId, i) => {
            var client = clients[clientId];
            return (  <ClientListItem client={ client } id={ clientId } key={ clientId }/>)
          })}
        </List>
      </Segment>
    )
  }
})
