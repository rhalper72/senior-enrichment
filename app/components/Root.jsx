import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {render} from 'react-dom';
import Main from './Main';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import CampusDetail from './CampusDetail';
import StudentDetail from './StudentDetail';
import NewCampus from './NewCampus';
import NewStudent from './NewStudent';
import EditCampus from './EditCampus';
import EditStudent from './EditStudent';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';

class Root extends Component{
  render() {
  return (
  <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/campuses/:id" component={CampusDetail} />
          <Route exact path="/campuses/edit/:id" component={EditCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:id" component={StudentDetail} />
          <Route exact path="/students/edit/:id" component={EditStudent} />
          <Route exact path="/addNewCampus" component={NewCampus} />
          <Route exact path="/addNewStudent" component={NewStudent} />
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  )
  }
  componentDidMount() {
    this.props.fetchInitialData()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialData: ()=>{
      dispatch(fetchCampuses());
      dispatch(fetchStudents());
    }
  }
}

export default connect(null, mapDispatchToProps)(Root);
