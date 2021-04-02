import React from 'react';
import { connect } from 'react-redux';
import { createCampus } from '../store';

class AddCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
    }
    this.createCampus = this.createCampus.bind(this);
  }

  createCampus(ev) {
    ev.preventDefault();
    const { name, address, description } = this.state; //destructure state with updated submit
    this.props.createCampus(name, address, description); //calls createCampus imported from store, pass it down as props
  }

  render() {
    const { name, address, description } = this.state;
    return (
      <div>
        <form onSubmit={(ev) => this.createCampus(ev)}>
          {/*set the state whenever there is a change in value. After submit, call createCampus function*/}
          <input value={name} placeholder='Name' onChange={(ev) => this.setState({ name: ev.target.value })}></input>
          <input value={address} placeholder='Address' onChange={(ev) => this.setState({ address: ev.target.value })}></input>
          <input value={description} placeholder='Description' onChange={(ev) => this.setState({ description: ev.target.value})}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (name, address, description) => dispatch(createCampus(name, address, description))
  }
}

export default connect(null, mapDispatchToProps)(AddCampus);
