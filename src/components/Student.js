import React from 'react';
import axios from 'axios';

class singleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      student: '',
    };
  }

  async componentDidMount() {
    const id = window.location.hash.slice(10);
    const student = (await axios.get(`api/students/${id}`)).data;
    this.setState({ student });
  }

  render() {
    const { student } = this.state;
    if (!student.campus) {
      return (
        <div>
          <img src={student.imageUrl}></img>
          <h3>
            {student.firstName + ' ' + student.lastName}
          </h3>
          <p>
            Email: {student.email}
          </p>
          <p>GPA: {student.gpa}</p>
          <p>Campus: no campus</p>
        </div>
      )
    } else {
      return (
          <div>
          <img src={student.imageUrl}></img>
          <h3>
            {student.firstName + ' ' + student.lastName}
          </h3>
          <p>
            Email: {student.email}
          </p>
          <p>GPA: {student.gpa}</p>
          <p>Campus: {student.campus.name}</p>
        </div>
      )
    }
  }
}

export default singleStudent;
