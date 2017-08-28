import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Detail from './containers/detail/index.jsx'
import HomePage from './containers/home/index.jsx'
import './style/index.sass'

function App (){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/detail' component={Detail} />
      </Switch>
    </BrowserRouter>
  )
}

const root = document.getElementById('app');
ReactDOM.render(
  <App />,
  root
  )
