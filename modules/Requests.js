import React from 'react'
import { Segment, List, Item, Loader } from 'react-semantify'
import { Link } from 'react-router'
import requests from './Mockdata/requests'
import RequestLabel from './RequestLabel'
import ServiceLabel from './ServiceLabel'


var RequestListItem = React.createClass({
  render() {
    return (
      <Item>
        <div className="header"><Link to="">{ this.props.request.requestee }</Link></div>
        Service requested: <ServiceLabel type={this.props.request.serviceType}/> <br/><br/>
        { this.props.request.tags.map((tag, i)=> {
          return (  <RequestLabel key={i} type={tag}/>)
        })}
      </Item>
    )
  }
})

export default React.createClass({
  componentDidMount() {
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(()=> {
      this.setState({requests: requests, loading: false})
    }, 400)
  },

  render() {
    if (!this.state || this.state.loading) {
      return <Loader style={{marginTop: "5em"}} className="active centered large"/>
    }
    var requests = this.state.requests
    return (
      <Segment>
        <List className="divided">
          {
            requests.map((request, i) => {
              return (  <RequestListItem request={ request } key={ i }/>)
            })
          }
        </List>
      </Segment>
    )
  }
})
