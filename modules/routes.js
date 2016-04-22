import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Clients from './Clients'
import Heroes from './Heroes'
import Repo from './Repo'
import Home from './Home'
import Requests from './Requests'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/heroes" component={Heroes}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/clients" component={Clients}/>
    <Route path="/requests" component={Requests}/>
  </Route>
)
