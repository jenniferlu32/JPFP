import React from 'react';

const addStudent = (props) => {
  return (
    <div>
        <form onSubmit={(ev) => this.createStudent(ev)}>
        <input value={firstName} placeholder='First name' onChange={(ev) => this.setState({ firstName: ev.target.value })}/>
        <input value={lastName} placeholder='Last name' onChange={(ev) => this.setState({ lastName: ev.target.value })}/>
        <input value={email} placeholder='Email' onChange={(ev) => this.setState({ email: ev.target.value })}/>
        <input value={gpa} type='number' onChange={(ev) => this.setState({ gpa: ev.target.value })}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default addStudent;
