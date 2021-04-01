import React from 'react';
import Campus from './Campus';
import { Link } from 'react-router-dom';

const Campuses = (props) => {
  const { campuses } = props;
  return (
    <div>
      {
        campuses.map(campus => {
          return (
            <Link key={campus.id} to={`/campus/${campus.id}`}>
              <div>
                <img src={campus.imageUrl}></img>
                <h3>
                  {campus.name}
                </h3>
                <p>
                  {campus.address}
                </p>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Campuses;
