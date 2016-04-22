import React from 'react'
import { Segment, Menu, Item, List, Header } from 'react-semantify'


export default React.createClass({

  render() {
    return (
      <div>
        <Menu className="ui secondary pointing">
          <Item className="active item">
            All
          </Item>
          <Item className="item">
            Home
          </Item>
          <Item className="item">
            Moving
          </Item>
          <Item className="item">
            Cleaning
          </Item>
          <Item className="item">
            Events
          </Item>
          <Item className="item">
            Learning
          </Item>
          <Item className="item">
            Air Conditioning
          </Item>
          <Item className="item">
            Fitness
          </Item>
          <Item className="item">
            Pest Control
          </Item>
          <Item className="item">
            Commercial
          </Item>
          <div className="right menu">
            <Item className="ui item">
              Logout
            </Item>
          </div>
        </Menu>
        <div className="ui segment">
          <List className="divided">
            <Item>
              <div className="header">Superman</div>
              A lovely city
            </Item>
            <Item>
              <div className="header">Batman</div>
              A small town
            </Item>

          </List>
        </div>
      </div>
    )
  }
})
