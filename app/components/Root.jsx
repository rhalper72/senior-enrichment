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

//This file is handling my front-end routes. Tried to use as few exact pathes as possible. 
//If the user goes to a url that isn't specified, we will default to the home page... which is the Main component. 
//I got used to my component naming, but it would probably be good for me to go back and rename them to be more descriptive to my final use of them.
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
          <Route path="/campuses/edit/:id" component={EditCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:id" component={StudentDetail} />
          <Route path="/students/edit/:id" component={EditStudent} />
          <Route path="/addNewCampus" component={NewCampus} />
          <Route path="/addNewStudent" component={NewStudent} />
          <Route component={Main} />
        </Switch>
      </div>
    </Router>
  )
  }
  //orginally I had these individually on each component, but in the end it seemed easier to me to have it all load initially.  
  //Not sure what is best practice, or if there are downsides I haven't considered to doing it this way.
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
