import React from 'react';
import { connect } from 'react-redux';
import {createStudent} from '../store';

class AddStudent extends React.Component {
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
  createStudent(ev) {
    ev.preventDefault(); //prevent refreshing after hitting submit
    const { firstName, lastName, email, gpa } = this.state; //destructure elements from state
    this.props.createStudent(firstName, lastName, email, gpa); //add students to state
  }

  render() {
    const { firstName, lastName, email, gpa } = this.state;
    return (
      <div>
        <form onSubmit={(ev) => this.createStudent(ev)}>
          <input value={firstName} placeholder='First name' onChange={(ev) => this.setState({ firstName: ev.target.value })}/>
          <input value={lastName} placeholder='Last name' onChange={(ev) => this.setState({ lastName: ev.target.value })}/>
          <input value={email} placeholder='Email' onChange={(ev) => this.setState({ email: ev.target.value })}/>
          <input value={gpa} type='number' onChange={(ev) => this.setState({ gpa: ev.target.value })}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => { //this.props in component
  return {
    students: state.students,
  }
}


const mapDispatchToProps = (dispatch) => { //all the actions to this.props that can be dispatched in component
  return {
    createStudent: (firstName, lastName, email, gpa) => dispatch(createStudent(firstName, lastName, email, gpa)) //passes user input to the store
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);

