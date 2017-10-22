import axios from 'axios';

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';

//ACTION CREATORS
const get  = students => ({ type: GET_STUDENTS, students });
const create = student => ({type: CREATE_STUDENT, student})

//REDUCER
export default function reducer (students = [], action) {
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;

        case CREATE_STUDENT:
            return [action.student, ...students];

        default:
            return students;
    }
}

//THUNK CREATORS
export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
         .then(res => res.data)
         .then(students => {
             dispatch(get(students))
         })
         .catch(console.error)
};

export const createNewStudent = student => dispatch => {
    axios.post('/api/students', student)
         .then(res => dispatch(create(res.data)))
         .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
  }; 
  