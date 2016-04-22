import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Clients from './Clients'
import Client from './Client'
import Heroes from './Heroes'
import Hero from './Hero'
import Home from './Home'
import Requests from './Requests'
import Request from './Request'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/heroes" component={Heroes}/>
    <Route path="/heroes/:heroId" component={Hero}/>
    <Route path="/clients" component={Clients}/>
    <Route path="/clients/:clientId" component={Client}/>
    <Route path="/requests" component={Requests}/>
    <Route path="/requests/:requestId" component={Request}/>
  </Route>
)
