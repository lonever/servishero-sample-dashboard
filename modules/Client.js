import React from 'react'
import { Image, List, Item, Segment, Feed, Label, Content, Message, Loader } from 'react-semantify'
import { Link } from 'react-router'
import StarRatingComponent from 'react-star-rating-component'
import clients from './Mockdata/clients'

export default React.createClass({
  componentDidMount() {
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(function () {
      this.setState({client: clients[this.props.params.clientId], loading: false})
    }.bind(this), 400)
  },


  render() {
    if (!this.state || this.state.loading) {
      return (
        <Segment style={{minHeight: "10em"}}>
          <Loader className="centered active large"/>
        </Segment>
      )
    }
    if (this.state && !this.state.client) {
      return (
        <Segment style={{minHeight: "10em"}}>
          <h2> 404 Client not found! </h2>
        </Segment>
      )
    }
    var client = this.state.client
    return (
      <div>
        <Segment>
          <Image className="left floated medium rounded" src={ client.profilePic }/>
          <List style={{float: "right", width: "65%"}}>
            <Item >
              { client.name }
            </Item>
            <Item>
              { client.address }
            </Item>
            <Item>
              { client.email }
            </Item>
            <Item>
              { client.phone }
            </Item>
          </List>
        </Segment>
        <Segment style={{width: "47%", float: "left"}}>
          <h2> Activity </h2>
          <Feed>
            <div className="event">
              <div className="label">
                <i className="file text icon"></i>
              </div>
              <Content>
                <div className="summary">
                    A quote was given for request: Cleaning(home) by <br/>
                    <Link to="heroes/superman">Superman Cleaning Services</Link>
                    <Message>Hi, I can clean your house super quickly for RM3! Provided that there is no kryponite involved!</Message>
                  <div className="date">21/4/2016 15:30</div>
                </div>
              </Content>
            </div>
            <div className="event">
              <div className="label">
                <i className="comment icon"></i>
              </div>
              <Content>
                <div className="summary">
                    {client.name} requested for service: Cleaning(home)
                    <Message>Hello, I just moved in and I need to clean my aparment asap. The previous tenant left mysterious stains everywhere.</Message>
                  <div className="date">21/4/2016 15:29</div>
                </div>
              </Content>
            </div>
          </Feed>
        </Segment>
        <Segment style={{width: "47%", float: "right"}}>
          <h2> Reviews </h2>
          <Feed>
            <div className="event">
              <Content>
                <div className="summary">
                  Wow!<br/>
                  <Link to="heroes/superman">Superman Cleaning Services</Link>
                  <div className="date">20/4/2016 15:29</div>
                </div>
                <div className="extra text">
                  Omg he is super strong and hot and he comes and cleans everything up ;)
                </div>
                <StarRatingComponent
                   name="hero-rating"
                   starCount={10}
                   value={10}
                   editing={false}
                 />
              </Content>
            </div>
          </Feed>
        </Segment>
      </div>
    )
  }
})
