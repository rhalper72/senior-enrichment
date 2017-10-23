import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//This component displays all the details for one student.  

class StudentDetail extends Component {

    render() {
        const { student } = this.props;
        const campusId = student && student.campusId;

        return (
            <div>
                <h3>{student && student.firstName + ' ' + student.lastName}</h3>
                <Link to={`/students/edit/${student && student.id}`}>
                    <button>Edit</button>
                </Link>
                <ul>
                    <Link to={`/campuses/${campusId}`}>
                        <li>Campus: {student && student.campus.name}</li>
                    </Link>
                    <li>Email: {student && student.email}</li>
                </ul>
            </div>
        )
    }


}

//getting the student that matches the id param in URL from the Store.

const mapStateToProps = (state, ownProps) => {
    const studentId = Number(ownProps.match.params.id);
    return {
        student: state.students.find(student => student.id === studentId)
    }
}

export default connect(mapStateToProps, null)(StudentDetail);
