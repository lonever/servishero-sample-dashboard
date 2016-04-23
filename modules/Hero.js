import React from 'react'
import { Image, List, Item, Segment, Feed, Label, Content, Message, Loader } from 'react-semantify'
import StarRatingComponent from 'react-star-rating-component'
import ServiceLabel from './ServiceLabel'
import heroes from './Mockdata/heroes'

export default React.createClass({
  componentDidMount() {
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(function () {
      this.setState({hero: heroes[this.props.params.heroId], loading: false})
    }.bind(this), 1000)
  },
  render() {
    if (this.state && this.state.loading) {
      return (
        <Segment style={{minHeight: "10em"}}>
          <Loader className="centered active large"/>
        </Segment>
      )
    }
    if (this.state && !this.state.hero) {
      return (
        <Segment style={{minHeight: "10em"}}>
          <h2> 404 Hero not found! </h2>
        </Segment>
      )
    }
    return (
      <div>
        <Segment>
          <Image className="left floated medium rounded" src="http://vignette2.wikia.nocookie.net/p__/images/0/0c/Superman's_classic_pose.png/revision/latest?cb=20131218234907&path-prefix=protagonist"/>
          <List style={{float: "right", width: "65%"}}>
            <Item >
              Superman Cleaning Services
            </Item>
            <Item>
              41, Jalan Flyaway,
              Taman FlyTogether,
              46100, Petaling Jaya,
              Selangor
            </Item>
            <Item>
              superman@gmail.com
            </Item>
            <Item>
             +6012344444
            </Item>
            <Item>
              <StarRatingComponent
                 name="hero-rating"
                 starCount={10}
                 value={6}
                 editing={false}
               />
            </Item>
            <Item>
              Services Provided:
                <ServiceLabel type="cleaning-home"/>
                <ServiceLabel type="cleaning-commercial"/>
                <ServiceLabel type="moving"/>
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
                    A quote was given for request: Cleaning(home)
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
                    Superman Cleaning Services received a service request: Cleaning(home)
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
                  Meh
                  <div className="date">20/4/2016 15:29</div>
                </div>
                <div className="extra text">
                  Cleans fast, but cannot walk within 5 meteres of Kryponite, useless if you wanna clean it
                </div>
                <StarRatingComponent
                   name="hero-rating"
                   starCount={10}
                   value={3}
                   editing={false}
                 />
              </Content>
            </div>
            <div className="event">
              <Content>
                <div className="summary">
                  Wow!
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
