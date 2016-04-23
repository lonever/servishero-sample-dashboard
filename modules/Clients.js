import React from 'react'
import { Segment, List, Item, Loader } from 'react-semantify'
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
  componentDidMount() {
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(function () {
      this.setState({clients: clients, loading: false})
    }.bind(this), 400)
  },

  render() {
    if (!this.state || this.state.loading) {
      return <Loader style={{marginTop: "5em"}} className="active centered large"/>
    }
    var clients = this.state.clients
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
