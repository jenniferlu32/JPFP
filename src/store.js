import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const LOAD_STUDENTS = 'LOAD_STUDENTS';
const LOAD_CAMPUSES = 'LOAD_CAMPUSES';
const CREATE_STUDENT = 'CREATE_STUDENT';
const SINGLE_STUDENT = 'SINGLE_STUDENT';

//ACTIONS
const loadStudentsObj = (students) => {
  return {
    type: LOAD_STUDENTS,
    students
  }
}

const loadStudents = () => {
  return async (dispatch) => {
    try {
      const students = (await axios.get('/api/students')).data;
      dispatch(loadStudentsObj(students));
    } catch(err) {
      console.log(err);
    }
  }
}

const _loadCampuses = (campuses) => { //action creator
  return {
    type: LOAD_CAMPUSES,
    campuses
  }
}

const loadCampuses = () => {
  return async(dispatch) => {
    try {
      const campuses = (await axios.get('/api/campuses')).data;
      dispatch(_loadCampuses(campuses));
    } catch(err) {
      console.log(err);
    }
  }
}

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student
  }
}

const createStudent = (firstName, lastName, email, gpa) => {
  return async(dispatch) => {
    try {
      const student = (await axios.post('/api/student', {
        firstName, lastName, email, gpa
      })).data;
      dispatch(_createStudent(student))
    } catch(err) {
      console.log(err);
    }
  }
}

//REDUCERS
const studentsReducer = (state=[], action) => {
  //action: {type: "LOAD_STUDENTS", students: Array(3)}
  if (action.type === LOAD_STUDENTS) {
    state = action.students;
  };
  if (action.type === CREATE_STUDENT) {
    state = [...state, action.student]
  }
  return state;
}

const campusesReducer = (state=[], action) => {
  if (action.type === LOAD_CAMPUSES) {
    state = action.campuses;
  }
  return state;
}

const reducer = combineReducers({
  students: studentsReducer,
  campuses: campusesReducer
});


//STORE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadStudents, loadCampuses, createStudent };
