import React from 'react';
import { Link } from 'react-router-dom';

const SingleStudent = (props) => {
    const name = props.student.firstName + ' ' + props.student.lastName;
    const campus = props.student.campus.name
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
        </div>
    )
}

export default SingleStudent;
