import axios from 'axios';

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
// const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
// const REMOVE_CAMPUS = 'DELETE_CAMPUS';

//ACTION CREATORS
const get  = campuses => ({ type: GET_CAMPUSES, campuses });
// const create = campus  => ({ type: CREATE_CAMPUS, campus });
const update = campus  => ({ type: UPDATE_CAMPUS, campus });
// const remove = campus  => ({ type: REMOVE_CAMPUS, campus });

//REDUCER
export default function reducer (campuses = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    // case CREATE_CAMPUS:
    //   return [action.campus, ...campuses];

    case UPDATE_CAMPUS:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    // case REMOVE_CAMPUS:
    //     return campuses.filter(campus => campus.id !== action.campus);

    default:
      return campuses;
  }
}


//THUNK CREATORS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => dispatch(get(res.data)));
};

// export const fetchCampus = (id) => dispatch => {
//   axios.get(`/api/campus/${id}`)
//        .then(res => dispatch(get(res.data)));
// };

// export const createNewCampus = campus => dispatch => {
//   axios.post('/api/campuses', campus)
//        .then(res => dispatch(create(res.data)))
//        .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
// };

// export const updateCampus = (id, campus) => dispatch => {
//   axios.put(`/api/campuses/${id}`, campus)
//        .then(res => dispatch(update(res.data)))
//        .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
// };

// export const removeCampus = id => dispatch => {
//     dispatch(remove(id));
//     axios.delete(`/api/campuses/${id}`)
//          .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
//   };
