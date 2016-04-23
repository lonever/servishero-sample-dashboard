import React from 'react'
import { Segment, Menu, Item, List, Header, Loader } from 'react-semantify'
import { Link } from 'react-router'
import ServiceLabel from './ServiceLabel'
import heroes from './Mockdata/heroes'
import StarRatingComponent from 'react-star-rating-component'

var HeroListItem = React.createClass({
  render() {
    return (
      <Item>
        <div className="header"><Link to={ "heroes/" + this.props.id }>{ this.props.hero.name }</Link></div>
        { this.props.hero.services.map((service, i)=> {
          return (  <ServiceLabel key={i} type={service}/>)
        })}
        <div style={{float: "right"}}>
          <StarRatingComponent
             name="hero-rating"
             starCount={10}
             value={ this.props.hero.averageRating }
             editing={false}
           />
        </div>

      </Item>
    )
  }
})
export default React.createClass({
  componentDidMount() {
    this.setState({loading: true})
    //mock ajax request here
    setTimeout(function () {
      this.setState({heroes: heroes, loading: false})
    }.bind(this), 400)
  },
  render() {
    if (!this.state || this.state.loading) {
      return <Loader style={{marginTop: "5em"}} className="active centered large"/>
    }
    var heroes = this.state.heroes
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
            {Object.keys(heroes).map((heroId, i)=> {
              return (  <HeroListItem hero={ heroes[heroId] } id={ heroId } key={ heroId }/>)
            })}
          </List>
        </Segment>
      </div>
    )
  }
})
