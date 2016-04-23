import React from 'react'
import { Segment, Menu, Item, List, Header } from 'react-semantify'
import ServiceLabel from './ServiceLabel'


export default React.createClass({

  render() {
    return (
      <div>
        <Menu className="">
          <Item>All</Item>
          <Item>Cleaning</Item>
          <Item>Home</Item>
          <Item>Fitness</Item>
          <div className="right menu">
           <div className="item">
             <div className="ui icon input">
               <input type="text" placeholder="Search..." />
               <i className="search link icon"></i>
             </div>
           </div>
         </div>
        </Menu>
        <Segment>
          <List className="divided">
            <Item>
              <div className="header">Superman Cleaning Services</div>
              <ServiceLabel type="cleaning-home"/>
              <ServiceLabel type="cleaning-commercial"/>
              <ServiceLabel type="moving"/>
            </Item>
            <Item>
              <div className="header">Batman Fitness</div>
              <ServiceLabel type="karate"/>
              <ServiceLabel type="personal-training"/>
              <ServiceLabel type="swimming"/>
              <ServiceLabel type="yoga"/>
            </Item>
            <Item>
              <div className="header">Flash Movers</div>
              <ServiceLabel type="moving"/>
            </Item>
            <Item>
              <div className="header">Ah Chong Personal Training</div>
              <ServiceLabel type="personal-training"/>
            </Item>
            <Item>
              <div className="header">Lims Home Cleaning</div>
              <ServiceLabel type="cleaning-home"/>
            </Item>
            <Item>
              <div className="header">Karate Kidz</div>
              <ServiceLabel type="karate"/>
              <ServiceLabel type="yoga"/>
            </Item>
            <Item>
              <div className="header">Aquaman Swimmers</div>
              <ServiceLabel type="swimming"/>
            </Item>
          </List>
        </Segment>
      </div>
    )
  }
})
