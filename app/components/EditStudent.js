import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStudent } from '../reducers/students'

class EditStudent extends Component {
    constructor (props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            campus: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleCampus = this.handleCampus.bind(this)
    }
//event handlers, again not very dry. one for each input field and a submit.
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(event);
    }

    handleFirstName(event){
        this.setState({firstName: event.target.value})
    }

    handleLastName(event){
        this.setState({lastName: event.target.value})
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }

    handleCampus(event){
        this.setState({campus: event.target.value})
    }


    render() {
        return (
            <div>
            <h1>Edit Student</h1>
            <h4>Please fill in any fields you would like to update</h4>
            <form onSubmit={this.handleSubmit}>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={this.handleFirstName} value={this.state.firstName} />
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={this.handleLastName} value={this.state.lastName} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={this.handleEmail} value={this.state.email} />
                </div>
                <div>
                    <label>Campus: </label>
                    <select type="text" name="campus" onChange={this.handleCampus} value={this.state.campus}>
                        {this.props.campuses && this.props.campuses.map((campus) => (
                            <option key={campus.id} value={campus.id}> {campus.name} </option>
                            )
                        )}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    students: state.students,
    campuses: state.campuses,
})
//dispatch to update a student in the store.
const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (event) => {
        const studentUpdate = {}
        if (event.target.firstName.value) studentUpdate.firstName = event.target.firstName.value
        if (event.target.lastName.value) studentUpdate.lastName = event.target.lastName.value
        if (event.target.email.value) studentUpdate.email = event.target.email.value
        if (event.target.campus.value) studentUpdate.campus = event.target.campus.value
        dispatch(updateStudent(ownProps.match.params.id, studentUpdate));
        ownProps.history.push('/students');
    }
  })



export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);


