import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchCampuses } from '../reducers/campuses';
// import { SingleCampus } from './SingleCampus'

class StudentDetail extends Component {



    // componentDidMount() {
    //     this.props.goFetchCampuses();
    // }

    render() {
        // console.log('PROPS!', this.props.student)
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

const mapStateToProps = (state, ownProps) => {
    const studentId = Number(ownProps.match.params.id);
    return {
        student: state.students.find(student => student.id === studentId)
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     fetchInitialData: () => {
//         dispatch(fetchCampuses());
//         dispatch(fetchStudents());
//       }
// })

export default connect(mapStateToProps, null)(StudentDetail);
