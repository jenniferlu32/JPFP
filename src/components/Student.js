import React from 'react';

const Student = (props) => { //takes student from Students
  const { student } = props; //{id: 1, firstName: "Jennifer", …}
  return (
    <div>
      <img src={student.imageUrl}></img>
      <h3>
        {student.firstName + ' ' + student.lastName}
      </h3>
    <p>
      {student.email}
    </p>
    </div>
  )
}

export default Student;
