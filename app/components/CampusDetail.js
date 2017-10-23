import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//This component is displays all the details, including associated students, for one campus.
//Had some initial trouble getting this page to work so tried a whole bunch of different ways to configure... 
//in the end I had forgotten I was using firstName/LastName in the database for student and not just name.
class CampusDetail extends Component {

    render() {
        const { campus, students } = this.props;
        if (!campus || !students){return null;}


        return (
            <div>
                <h1>{campus && campus.name} Campus</h1>
                <div>
                <Link to={`/campuses/edit/${campus.id}`}>
                <button>{`Edit ${campus.name} Details`}</button>
                </Link>
                </div>
                <img src={campus && campus.image} />
                <h2>Student List</h2>
                <ol>
                {students && students.map(student => (
                    <div key={student.id}>
                        <li>
                            <Link to={`/students/${student.id}`}>
                            <h3>{student.firstName + ' ' + student.lastName}</h3>
                            </Link>
                        </li>
                        <ul>
                            <li>Email: {student.email}</li>
                        </ul>
                    </div>
                ))}
                </ol>
            </div>
        )
    }


}

//getting the campus that matches the id param in URL from the Store.
//and getting all students that have that campus id from the Store.

const mapStateToProps = (state, ownProps) => {
    const campusId = Number(ownProps.match.params.id);
    if (!state.students || !state.campuses){return null;}
    return {
        campus: state.campuses.find(campus => campus.id === campusId),
        students: state.students.filter(student => student.campusId === campusId)
    }
}


export default connect(mapStateToProps, null)(CampusDetail);
