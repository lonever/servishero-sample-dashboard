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
  showAll() {
    this.setState({selectedCategory: null})
  },
  showCleaning() {
    console.log("clean")
    this.setState({selectedCategory: "cleaning"})
  },
  showFitness() {
    this.setState({selectedCategory: "fitness"})
  },
  showHome() {
    this.setState({selectedCategory: "home"})
  },
  render() {
    if (!this.state || this.state.loading) {
      return <Loader style={{marginTop: "5em"}} className="active centered large"/>
    }
    var heroes = this.state.heroes
    return (
      <div>
        <Menu className="">
          <Item onClick={ this.showAll }>All</Item>
          <Item onClick={ this.showCleaning }>Cleaning</Item>
          <Item onClick={ this.showHome }>Home</Item>
          <Item onClick={ this.showFitness }>Fitness</Item>
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
            {Object.keys(heroes).map((heroId, i) => {
              var hero = heroes[heroId];
              switch(this.state.selectedCategory) {
                case "cleaning":
                  if (hero.services.indexOf("cleaning-home") == -1 && hero.services.indexOf("cleaning-commercial") == -1) {
                    return;
                  }
                  break
                case "fitness":
                  if (hero.services.indexOf("personal-training") == -1 && hero.services.indexOf("karate") == -1 && hero.services.indexOf("yoga") == -1 && hero.services.indexOf("swimming") == -1 ) {
                    return;
                  }
                  break
                case "home":
                  if (hero.services.indexOf("cleaning-home") == -1 && hero.services.indexOf("moving") == -1) {
                    return;
                  }
                  break
                default:
              }

              return (  <HeroListItem hero={ hero } id={ heroId } key={ heroId }/>)
            })}
          </List>
        </Segment>
      </div>
    )
  }
})
