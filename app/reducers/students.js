import axios from 'axios';

//ACTION TYPES
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//ACTION CREATORS
const get  = students => ({ type: GET_STUDENTS, students });
const create = student => ({ type: CREATE_STUDENT, student });
const update = student  => ({ type: UPDATE_STUDENT, student });
const remove = student  => ({ type: REMOVE_STUDENT, student });

//REDUCER
export default function reducer (students = [], action) {
    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        case CREATE_STUDENT:
            return [action.student, ...students];

        case UPDATE_STUDENT:
        return students.filter(student => +student.id !== +action.student.id).concat(action.student)

        case REMOVE_STUDENT:
            return students.filter(student => +student.id !== +action.student.id);

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

  export const updateStudent = (id, student) => dispatch => {
    axios.put(`/api/students/${id}`, student)
         .then(res => dispatch(update(res.data)))
         .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
  };

  export const removeStudent = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/students/${id}`)
         .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
  };
