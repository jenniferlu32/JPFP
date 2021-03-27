import React from 'react';
import Campus from './Campus';

const Campuses = (props) => {
  const { campuses } = props;
  return (
    <div>
      {
        campuses.map(campus => <Campus key={campus.id} campus={campus} />)
      }
    </div>
  )
}

export default Campuses;
