import React from 'react';
import { Link } from 'react-router-dom';

const Students = (props) => { //students: [{...}, {...}, {...}]
  const { students } = props;
  return (
    students.map(student => {
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
  )
}

export default Students;
