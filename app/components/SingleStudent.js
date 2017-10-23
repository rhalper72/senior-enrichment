import React from 'react';
import { Link } from 'react-router-dom';
import { removeStudent } from '../reducers/students';
import { connect } from 'react-redux';
//This component is a single student section for the all students page, where it is mapped for each student. 
const SingleStudent = (props) => {
    const name = props.student.firstName + ' ' + props.student.lastName;
    const campus = props.student.campus ? props.student.campus.name : ''
    const email = props.student.email;
    const studentId = props.student.id
    return (
        <div>
            <ul>
            <Link to={`/students/${studentId}`}>
                <li>{name}</li>
            </Link>
                <li>Campus: {campus}</li>
                <li>Email: {email}</li>
            </ul>
            <button onClick={() => {props.onDelete(studentId)} }>{`Delete ${props.student.firstName}`}</button>
        </div>
    )
}

//This is my dispatch to props for deleting a student. Unfortunately my delete is not 100% working.
//I am deleting the student in the database, but it doesn't show on the page until you refresh... which means I am probably not updating the store properly.
const mapDispatchToProps = (dispatch) => ({
    onDelete: (id) => {
        dispatch(removeStudent(id));
    }
  })

export default connect(null, mapDispatchToProps)(SingleStudent);
