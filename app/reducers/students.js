import axios from 'axios';

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS
const get  = students => ({ type: GET_STUDENTS, students });

//REDUCER
export default function reducer (students = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;

        default:
            return students;
    }
}

//THUNK CREATORS
export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
         .then(res => dispatch(get(res.data)));
};
