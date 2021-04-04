import React from 'react';
import { Link } from 'react-router-dom';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import { deleteCampus, loadCampuses } from '../store';

class Campuses extends React.Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(campusId) {
    this.props.deleteCampus(campusId);
  }

  render() {
    return (
      <div>
        <AddButton />
        {
          this.props.campuses.map(campus => {
            return (
              <div key={campus.id}>
              <Link to={`/campus/${campus.id}`}>
                  <img src={campus.imageUrl}></img>
                  <h3>
                    {campus.name}
                  </h3>
                  <p>
                    {campus.address}
                  </p>

              </Link>
              <button onClick={() => this.onDelete(campus.id)}>Delete</button>
              </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampus: (campusId) => dispatch(deleteCampus(campusId)),
    loadCampuses: () => dispatch(loadCampuses()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
