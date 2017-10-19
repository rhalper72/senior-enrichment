'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './components/Main'
import Navbar from './components/Navbar'
import AllCampuses from './components/AllCampuses';

import store from './store'
import Root from './components/Root'

render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Main />
        <AllCampuses />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)
