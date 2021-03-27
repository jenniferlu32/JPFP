import React from 'react';
import Student from './Student';

const Students = (props) => { //students: [{...}, {...}, {...}]
  const { students } = props;
  return (
    students.map(student => <Student key={student.id} student={student} />)
  )
}

export default Students;
