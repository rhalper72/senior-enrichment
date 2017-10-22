import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../reducers/campuses'

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

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(event);
    }

    handleName(event){
        console.log('NAME', event.target.value)
        this.setState({name: event.target.value})
    }

    handleImage(event){
        console.log('IMAGE', event.target.value)
        this.setState({image: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>Edit Campus</h1>
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

// const mapStateToProps = (state) => ({
//     students: state.students
// })

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



export default connect(null, mapDispatchToProps)(EditCampus);

