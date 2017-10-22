import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchCampuses } from '../reducers/campuses';
// import { SingleCampus } from './SingleCampus'

class CampusDetail extends Component {



    // componentDidMount() {
    //     this.props.goFetchCampuses();
    // }

    render() {
        //console.log('PROPS!', this.props)
        const { campus, students } = this.props;
        // const studentId = students && students.student.id
        console.log(students)
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

const mapStateToProps = (state, ownProps) => {
    const campusId = Number(ownProps.match.params.id);
    if (!state.students || !state.campuses){return null;}
    return {
        campus: state.campuses.find(campus => campus.id === campusId),
        students: state.students.filter(student => student.campusId === campusId)
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     fetchInitialData: () => {
//         dispatch(fetchCampuses());
//         dispatch(fetchStudents());
//       }
// })

export default connect(mapStateToProps, null)(CampusDetail);
