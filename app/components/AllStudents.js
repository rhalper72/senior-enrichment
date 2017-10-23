import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';
import { fetchStudents } from '../reducers/students';
import { Link } from 'react-router-dom';
//This page displays all students. It maps the SingleStudent component for existing student.

class AllStudents extends Component {

    render() {
        console.log(this.props)
        const { students } = this.props;
        return (
            <div>
                <h1>Our Students:</h1>
                <Link to={`/addNewStudent`}>
                <button>Add New Student</button>
                </Link>
                {students && students.map(student => <SingleStudent key={student.id} student={student} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students
})

export default connect(mapStateToProps, null)(AllStudents);
