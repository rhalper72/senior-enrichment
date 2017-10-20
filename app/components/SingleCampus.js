import React from 'react';
import { Link } from 'react-router-dom';

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
        </div>
    )
}

export default SingleCampus;
