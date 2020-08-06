import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Home from './components/Home'
import GamePage from './components/GamePage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={GamePage} />
    </Switch>
  </BrowserRouter>
)

export default App
