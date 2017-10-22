import React from 'react';
import { Link } from 'react-router-dom';
import { removeStudent } from '../reducers/students';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (id) => {
        dispatch(removeStudent(id));
        // ownProps.history.push('/campuses');
    }
  })

export default connect(null, mapDispatchToProps)(SingleStudent);
