import React from 'react'
import NavLink from './NavLink'
import { Grid, Column, Menu, Item, Header} from 'react-semantify'

export default React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Column className="three wide">
            <Menu className="vertical relaxed sticky main-menu">
              <Item>
                <img src="http://4b9d3madiyh1t61o64fjrmfz.wpengine.netdna-cdn.com/wp-content/uploads/sh_logo_full.png" alt="Trusted local service providers to the rescue!" />
              </Item>
              <NavLink to="/" onlyActiveOnIndex>Dashboard</NavLink>
              <NavLink to="/requests">Requests</NavLink>
              <NavLink to="/heroes">Heroes</NavLink>
              <NavLink to="/clients">Clients</NavLink>
            </Menu>
          </Column>
          <Column className="thirteen wide">
            <div style={{ marginTop: "3em", marginRight: "3em"}}>
              {this.props.children}
            </div>
          </Column>
        </Grid>
      </div>
    )
  }
})
