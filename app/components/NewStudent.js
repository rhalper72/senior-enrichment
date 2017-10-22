import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewStudent } from '../reducers/students'

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

    // handleAnyChange(event){
    //     console.log('onChange', event.target.value)
    //     this.setState({
    //         firstName: event.target.firstName.value ? event.target.firstName.value : this.state.firstName,
    //         lastName: event.target.lastName.value,
    //         email: event.target.email.value,
    //         campus: event.target.campus.value
    //     })
    // }

    handleFirstName(event){
        console.log('first', event.target.value)
        this.setState({firstName: event.target.value})
    }

    handleLastName(event){
        console.log('last', event.target.value)
        this.setState({lastName: event.target.value})
    }

    handleEmail(event){
        console.log('email', event.target.value)
        this.setState({email: event.target.value})
    }

    handleCampus(event){
        console.log('campus', event.target.value)
        this.setState({campus: event.target.value})
    }

    render() {
        // console.log('camps', this.props.campuses)
        return (
            <div>
                <h1>Add A New Studnet</h1>
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
    campuses: state.campuses,
})

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