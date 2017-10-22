import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import { fetchCampuses } from '../reducers/campuses';
import { Link } from 'react-router-dom';

class AllCampuses extends Component {

    // componentDidMount() {
    //     this.props.goFetchCampuses();
    //   }

    render() {
        console.log('PROPS!', this.props)
        const { campuses } = this.props;
        return (
            <div>
                <h1>Our Campuses:</h1>
                <Link to={`/addNewCampus`}>
                <button>Add New Campus</button>
                </Link>
                <div>
                    {campuses && campuses.map(campus => <SingleCampus key={campus.id} campus={campus} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    campuses: state.campuses
})

// const mapDispatchToProps = (dispatch) => ({
//     goFetchCampuses: () => dispatch(fetchCampuses())
//   })

export default connect(mapStateToProps, null)(AllCampuses);
