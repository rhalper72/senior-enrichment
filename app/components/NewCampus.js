import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCampus } from '../reducers/campuses'

//This component displays a page where you can add a new campus.
class NewCampus extends Component {
    constructor (props){
        super(props)
//I am keeping track of changes on the local state, then sending them to the store on submit.
//Later I would like to come back add additional functionality using the local state, like keeping the submit button deactive until the fields have text in them.
        this.state = {
            name: '',
            image: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleImage = this.handleImage.bind(this)
    }
    //event handlers for change and submit. 
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
                <h1>Add A New Campus</h1>
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
//dispatching to the store to create a new campus.
const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (event) => {
        const campus = {
            name: event.target.name.value,
            image: event.target.image.value,
        }
        dispatch(createNewCampus(campus));
        ownProps.history.push('/campuses');
    }
  })


export default connect(null, mapDispatchToProps)(NewCampus);

