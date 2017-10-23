import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../reducers/campuses'

//This component takes you to a new page where you can edit a campus.
//Not thrilled with how I did this. The fields are not auto filled in, so you need to retype any field you want to update.
class EditCampus extends Component {
    constructor (props){
        super(props)

        this.state = {
            name: '',
            image: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleImage = this.handleImage.bind(this)
    }
//event handlers
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(event);
    }

    handleName(event){
        this.setState({name: event.target.value})
    }

    handleImage(event){
        this.setState({image: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>{`Edit ${this.props.campus && this.props.campus.name} Campus`}</h1>
                <h4>Please fill in any fields you would like to update</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Campus Name: </label>
                    <input type="text" name="name" onChange={this.handleName} value={this.state.name} />
                    <div>
                        <label>Image: </label>
                        <input type="text" name="image" onChange={this.handleImage} value={this.state.image} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
//Right now I am just using this to put the name of the campus you are editing, but was goihg to also use it to prepopulate the input fields
const mapStateToProps = (state, ownProps) => {
    const campusId = Number(ownProps.match.params.id);
    if (!state.students || !state.campuses){return null;}
    return {
        campus: state.campuses.find(campus => campus.id === campusId),
        students: state.students.filter(student => student.campusId === campusId)
    }
}
//Dispatch to edit
const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (event) => {
        console.log('OWN', ownProps)
        const campus = {
            name: event.target.name.value,
            image: event.target.image.value,
        }
        dispatch(updateCampus(ownProps.match.params.id, campus));
        ownProps.history.push('/campuses');
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);

