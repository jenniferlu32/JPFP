import React from 'react';
import { connect } from 'react-redux';
import { editCampus } from '../store';
//import axios from 'axios;'

class CampusForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      address: '',
      description: '',
    }
  }

  async componentDidMount() {
    const campusId = window.location.hash.slice(9);
    const campus = this.props.campuses.filter(campus => campus.id == campusId)[0];
    const { id, name, address, description } = campus;
    await this.setState({
      id, name, address, description
    });
  }

  editCampus(ev) {
    ev.preventDefault();
    const { id, name, address, description } = this.state;
    this.props.editCampus(id, name, address, description);
  }

  render() {
    const { name, address, description } = this.state;
    return (
      <div>
        <form onSubmit={(ev) => this.editCampus(ev)}>
          {/*set the state whenever there is a change in value. After submit, call createCampus function*/}
          <input value={name} placeholder='Name' onChange={(ev) => this.setState({ name: ev.target.value })}></input>
          <input value={address} placeholder='Address' onChange={(ev) => this.setState({ address: ev.target.value })}></input>
          <input value={description} placeholder='Description' onChange={(ev) => this.setState({ description: ev.target.value})}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCampus: (id, name, address, description) => dispatch(editCampus(id, name, address, description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
