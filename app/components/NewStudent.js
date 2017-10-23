import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewStudent } from '../reducers/students'
//I am keeping track of changes on the local state, then sending them to the store on submit.
//Later I would like to come back add additional functionality using the local state, like keeping the submit button deactive until the fields have text in them.
class NewStudent extends Component {
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

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(event);
    }

    //event handlers for each input field.  Feels like there has to be a more DRY way to do this, 
    //but I tried a few things unsuccessfully and came back to listing them individually.
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
        console.log('PROPSL: ', this.props)
        return (
            <div>
                <h1>Add A New Student</h1>
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
//getting campuses from the store to list them in my select field.
const mapStateToProps = (state) => ({
    campuses: state.campuses,
})
//dispatching to store to create a new student.
const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (event) => {
        const student = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            campusId: event.target.campus.value
        }
        dispatch(createNewStudent(student));
        ownProps.history.push('/students');
    }
  })

export default connect(mapStateToProps,mapDispatchToProps)(NewStudent);