import React from 'react';

const SingleStudent = (props) => {
    const name = props.student.firstName + props.student.lastName;
    const email = props.student.email;

    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{email}</li>>
            </ul>
        </div>
    )
}

export default SingleStudent;
