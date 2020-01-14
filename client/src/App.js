import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Team from './pages/Team'
import Match from './pages/Match'
import MatchView from './pages/MatchView'
import ScoreFeed from './pages/ScoreFeed'

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/team/:id' component={Team}></Route>
          <Route exact path='/match' component={Match}></Route>
          <Route path='/match/:id' component={MatchView}></Route>
          <Route path='/recent' component={ScoreFeed}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
