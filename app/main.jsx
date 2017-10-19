'use strict'
import React, { Component } from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';

import store from './store'
import Root from './components/Root'

render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
