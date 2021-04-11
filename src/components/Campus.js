import React from 'react';
import axios from 'axios';
import CampusForm from './CampusForm';
import { connect } from 'react-redux';

class singleCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      campus:'',
      show: false,
    }
  }

  async componentDidMount() {
    const id = window.location.hash.slice(9);
    const campus = (await axios.get(`api/campuses/${id}`)).data;
    this.setState({ campus })
  }

  render() {
    const { campus } = this.state;
    if (!campus) {
      return (
        null
      )
    } else {
      return (
        <div>
          <img src={campus.imageUrl}></img>
          <h3>
            {campus.name}
          </h3>
          <p>
            {`Address: ${campus.address}`}
          </p>
          <p>{`Description: ${campus.description}`}</p>
          <h3>Students:</h3>
            {campus.students.length > 0 ?
            campus.students.map(student => {
              return (
                <ul key={student.id}>
                  <li>
                    { `${student.firstName} ${student.lastName}` }
                  </li>
                </ul>
              )
            }) : <p>No Students</p>}
            <button onClick={() => this.setState({...this.state, show: !this.state.show})}>Edit</button>
            <div>
              {
                this.state.show ? <CampusForm /> : ''
              }
            </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  }
}

export default connect(mapStateToProps, null)(singleCampus);
