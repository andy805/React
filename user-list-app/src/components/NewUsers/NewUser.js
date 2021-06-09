import React from 'react'
import UserForm from './UserForm.js'

const NewUser = (props) => {

  const addNewUser = (n) => {
    props.addUser(n);
  };

  return (
    <div>
      <UserForm newUserForm={addNewUser} />
    </div>
  );
}

export default NewUser;
