import React from 'react';
import { Link } from 'react-router-dom';
import { removeCampus } from '../reducers/campuses';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: (id) => {
        dispatch(removeCampus(id));
        // ownProps.history.push('/campuses');
    }
  })

export default connect(null, mapDispatchToProps)(SingleCampus);
