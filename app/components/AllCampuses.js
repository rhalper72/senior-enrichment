import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleCampus from './SingleCampus';
import { fetchCampuses } from '../reducers/campuses';

class AllCampuses extends Component {

    componentDidMount() {
        this.props.goFetchCampuses();
      }

    render() {
        console.log(this.props)
        const { campuses } = this.props;
        return (
            <div>
                {campuses && campuses.map(campus => <SingleCampus key={campus.id} campus={campus} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    campuses: state.campuses
})

const mapDispatchToProps = (dispatch) => ({
    goFetchCampuses: () => dispatch(fetchCampuses())
  })

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
