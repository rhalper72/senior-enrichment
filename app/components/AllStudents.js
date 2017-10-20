import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleStudent from './SingleStudent';
import { fetchStudents } from '../reducers/students';

class AllStudents extends Component {

    // componentDidMount() {
    //     this.props.goFetchStudents();
    //   }

    render() {
        console.log(this.props)
        const { students } = this.props;
        return (
            <div>
                {students && students.map(student => <SingleStudent key={student.id} student={student} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students
})

// const mapDispatchToProps = (dispatch) => ({
//     goFetchStudents: () => dispatch(fetchStudents())
//   })

export default connect(mapStateToProps, null)(AllStudents);
