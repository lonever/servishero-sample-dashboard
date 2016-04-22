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
              <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/repos">Repos</NavLink>
            </Menu>
          </Column>
          <Column className="thirteen wide">
            {this.props.children}
          </Column>
        </Grid>
      </div>
    )
  }
})
