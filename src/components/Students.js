import React from 'react';
import { Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import { connect } from 'react-redux';
import { deleteStudent } from '../store';

class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(studentId) {
    this.props.deleteStudent(studentId);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show})}>Add Student</button>
        {
          this.state.show ? <AddStudent /> : ''
        }
        {
          this.props.students.map(student => {
            return (
              <div key={student.id}>
                <Link
                  to={`student/${student.id}`}
                  >
                    <div>
                        <img src={student.imageUrl}></img>
                        <h3>
                          {student.firstName + ' ' + student.lastName}
                        </h3>
                        <p>
                          {student.email}
                        </p>
                    </div>
                </Link>
                <button onClick={() => this.onDelete(student.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => { //to access students in props
  return {
    students: state.students
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
