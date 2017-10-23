import React from 'react';
import { Link } from 'react-router-dom';
import { removeCampus } from '../reducers/campuses';
import { connect } from 'react-redux';
//This component is a single student section for the all campuses page, where it is mapped for each campus. 
const SingleCampus = (props) => {
    const name = props.campus.name;
    const image = props.campus.image;
    const campusId = props.campus.id;

    return (
        <div>
            <ul>
                <Link to={`/campuses/${campusId}`}>
                    <li>{name}</li>
                    <img src={image} />
                </Link>
            </ul>
            <button onClick={() => {props.onDelete(campusId)} }>Delete</button>
        </div>
    )
}
//This is my dispatch to props for deleting a campus. Unfortunately my delete is not 100% working.
//I am deleting the campus in the database, but it doesn't show on the page until you refresh... which means I am probably not updating the store properly.
const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (id) => {
        dispatch(removeCampus(id));
    }
  })

export default connect(null, mapDispatchToProps)(SingleCampus);
