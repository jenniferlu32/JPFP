import React from 'react';
import axios from 'axios';
//const { models: { Student, Campus } } = require('../../db/data');

const singleStudent = (props) => {
  const id = window.location.hash.slice(10);
  console.log(id);
  return (
    <div>
      hi
    </div>
  )
}

export default singleStudent;
