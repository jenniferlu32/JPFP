import React from 'react';
import AddCampus from './AddCampus';

class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.setState({show: !this.state.show})}}>Add Campus</button>
        {
          this.state.show ? <AddCampus /> : null
        }
      </div>
    )
  }
}

export default AddButton;
