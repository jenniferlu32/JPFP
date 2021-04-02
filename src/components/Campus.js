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
    console.log(id)
    const campus = (await axios.get(`api/campuses/${id}`)).data;
    this.setState({ campus })
  }

  render() {
    const { campus } = this.state;
    if (!campus.students) {
      return null
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
          <ul>
            <li>{campus.students[0].firstName}</li>
          </ul>
        </div>
      )
    }
  }
}

export default singleCampus;
