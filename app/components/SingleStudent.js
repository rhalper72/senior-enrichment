import React from 'react';
import { Link } from 'react-router-dom';
import { removeStudent } from '../reducers/students';
import { connect } from 'react-redux';
//This component is a single student section for the all students page, where it is mapped for each student.
//Please note I completly refactored this page when attempting to fix an error with delete, which is why it is done differently than single campus.
//this uses mapStateToProps, single campus doesn't.  Turns out that wasn't the issue at all in the end.
const SingleStudent = (props) => {
    const currentStudent = props.students.find((student)=>{
        return student.id === props.studentId
    })
    if ( !currentStudent ){return null;}
    const name = currentStudent.firstName + ' ' + currentStudent.lastName;
    const campus = currentStudent.campus ? currentStudent.campus.name : ''
    const email = currentStudent.email;
    const studentId = currentStudent.id

    return (
        <div>
            <ul>
            <Link to={`/students/${studentId}`}>
                <li>{name}</li>
            </Link>
                <li>Campus: {campus}</li>
                <li>Email: {email}</li>
            </ul>
            <button onClick={() => {props.onDelete(currentStudent)} }>{`Delete ${currentStudent.firstName}`}</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    students: state.students
})

//This is my dispatch to props for deleting a student. Unfortunately my delete is not 100% working.
//I am deleting the student in the database, but it doesn't show on the page until you refresh... which means I am probably not updating the store properly.
const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (student) => {
        dispatch(removeStudent(student));
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
