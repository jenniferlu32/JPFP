import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadStudents, createStudent, loadCampuses } from './store';
import Home from './components/Home';
import Nav from './components/Nav';
import Students from './components/Students';
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
    this.createStudent = this.createStudent.bind(this);
  }

  componentDidMount() {
    //this.props: {students: Array(0), loadStudents: f, loadCampuses: f, createStudents: f}
    this.props.loadStudents(); //where react interacts with the store and calls function after each render
    this.props.loadCampuses();
  }

  createStudent(ev) {
    ev.preventDefault(); //prevent refreshing after hitting submit
    const { firstName, lastName, email, gpa } = this.state; //destructure elements from state
    this.props.createStudent(firstName, lastName, email, gpa); //add students to state
  }

  render() {
    //['Jennifer', 'Lu', 'jenniferlu32@gmail.com', 3.63]
    const { firstName, lastName, email, gpa } = this.state; //user input
    return (
      <HashRouter>
        <Nav />
        <div>
          <form onSubmit={(ev) => this.createStudent(ev)}>
            <input value={firstName} placeholder='First name' onChange={(ev) => this.setState({ firstName: ev.target.value })}/>
            <input value={lastName} placeholder='Last name' onChange={(ev) => this.setState({ lastName: ev.target.value })}/>
            <input value={email} placeholder='Email' onChange={(ev) => this.setState({ email: ev.target.value })}/>
            <input value={gpa} type='number' onChange={(ev) => this.setState({ gpa: ev.target.value })}/>
            <button>Submit</button>
          </form>
          <Route path='/' exact component={Home} />
          <Route path='/students' component={() => <Students students={this.props.students} />}/>
          <Route path='/campuses' component={() => <Campuses campuses={this.props.campuses} />} />
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
    createStudent: (firstName, lastName, email, gpa) => dispatch(createStudent(firstName, lastName, email, gpa)) //passes user input to the store
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
