import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';
import AddStudent from './AddStudent';

class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    }
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
              <Link key={student.id}
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
            )
          })
        }
      </div>
    )
  }
}

export default Students;
