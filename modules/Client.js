import React from 'react'
import { Image, List, Item, Segment, Feed, Label, Content, Message } from 'react-semantify'
import StarRatingComponent from 'react-star-rating-component'

export default React.createClass({
  componentDidMount() {

  },
  render() {
    const { heroId } = this.props.params
    return (
      <div>
        <Segment>
          <Image className="left floated medium rounded" src="http://www.howtogetthewomanofyourdreams.com/wp-content/uploads/2013/03/womanslide21.png"/>
          <List style={{float: "right", width: "65%"}}>
            <Item >
              Lim Ah Mei
            </Item>
            <Item>
              41, Jalan Flyaway,
              Taman FlyTogether,
              46100, Petaling Jaya,
              Selangor
            </Item>
            <Item>
              ahmei@gmail.com
            </Item>
            <Item>
             +6012344444
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
                    Lim Ah Mei requested for service: Cleaning(home)
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
