import React from 'react';

const SingleCampus = (props) => {
    const name = props.campus.name;
    const image = props.campus.image;

    return (
        <div>
            <ul>
                <li>{name}</li>
                <img src={image} />
            </ul>
        </div>
    )
}

export default SingleCampus;
