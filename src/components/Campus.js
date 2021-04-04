import React from 'react';
import axios from 'axios';

class singleCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      campus:'',
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

        </div>
      )
    }
  }
}

export default singleCampus;
