import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';
import { connect } from 'react-redux';

class Campuses extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AddButton />
        {
          this.props.campuses.map(campus => {
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
}

const mapStateToProps = (state) => { //to access campuses in props
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps, null)(Campuses);
