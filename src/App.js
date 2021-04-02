import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadStudents, loadCampuses } from './store';
import Home from './components/Home';
import Nav from './components/Nav';
import Students from './components/Students';
import singleStudent from './components/Student';
import singleCampus from './components/Campus';
import Campuses from './components/Campuses';

class App extends React.Component {
  constructor() {
    super();
    this.state = { //template of adding a new student
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0
    }
  }

  componentDidMount() {
    //this.props: {students: Array(0), loadStudents: f, loadCampuses: f, createStudents: f}
    this.props.loadStudents(); //where react interacts with the store and calls function after each render
    this.props.loadCampuses();
  }

  render() {
    //['Jennifer', 'Lu', 'jenniferlu32@gmail.com', 3.63]
    const { firstName, lastName, email, gpa } = this.state; //user input
    return (
      <HashRouter>
        <Nav />
        <div>

          <Route path='/' exact component={Home} />

          <Route //route showing all students
          path='/students'
          component={() => <Students
            students={this.props.students}
            />}/>

          <Route //route showing single student
          path={`/student/:id`}
          component={singleStudent}
          />

          <Route //route showing all campuses
          path='/campuses'
          component={() => <Campuses campuses={this.props.campuses} />} />

          <Route
          path='/campus/:id' //route showing single campus
          component={singleCampus}
          />

        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => { //this.props in component
  return {
    students: state.students,
    campuses: state.campuses
  }
}


const mapDispatchToProps = (dispatch) => { //all the actions to this.props that can be dispatched in component
  return {
    loadStudents: () => dispatch(loadStudents()),
    loadCampuses: () => dispatch(loadCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
