import axios from 'axios';

//ACTION TYPES
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'DELETE_CAMPUS';

//ACTION CREATORS
const get  = campuses => ({ type: GET_CAMPUSES, campuses });
const create = campus  => ({ type: CREATE_CAMPUS, campus });
const update = campus  => ({ type: UPDATE_CAMPUS, campus });
const remove = campus  => ({ type: REMOVE_CAMPUS, campus });

//REDUCER - since i split my reducer into two files and only have one prop of inital state in each file I am just passing in that one intial prop instead of an object.
export default function reducer (campuses = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case CREATE_CAMPUS:
      return [action.campus, ...campuses];

    case UPDATE_CAMPUS:
      return campuses.filter(campus => +campus.id !== +action.campus.id).concat(action.campus)

    case REMOVE_CAMPUS:
        return campuses.filter(campus => +campus.id !== +action.campus.id);

    default:
      return campuses;
  }
}


//THUNK CREATORS
//orignailly had a fetchCampus Thunk as well, which took in an id, to just fetch one campus... but ended up using fetchcampus for both needs.
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => dispatch(get(res.data)))
       .catch(err => console.error(`Getting campuses unsuccesful`, err));
};

export const createNewCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${id} unsuccesful`, err));
};

export const removeCampus = campus => dispatch => {
    dispatch(remove(campus));
    axios.delete(`/api/campuses/${campus.id}`)
         .catch(err => console.error(`Removing campus: ${campus.id} unsuccesful`, err));
  };
