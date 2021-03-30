import React from 'react';


const singleCampus = (props) => {
  const { campus } = props;
  return (
    <div key={campus.id}>
      <img src={campus.imageUrl}></img>
      <h3>{campus.name}</h3>
    </div>
  )
}

export default singleCampus;
