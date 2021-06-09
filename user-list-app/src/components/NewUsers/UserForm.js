import React, {useState} from 'react'


const UserForm = (props) => {
  const[userName, setUserName] = useState("");
  const[age, setAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }
  const ageHandler = (event) => {
      setAge(event.target.value);
  }

  const userFormSubmitHandler = (event) => {
    event.preventDefault();
    if(userName === "" && age ==="") {
      /* bad input */
    }
    else if (userName !== "" && age < 0) {
      /* bad input */
    }
    else if (userName === "" && age !== "") {
      /* bad input */
    }
    else if (userName !== "" && age === "") {
      /* bad input */
    }
    else {
      const newUser = {
        id: "USER"+String(props.counter),
        name: userName,
        age: age
      };
      props.newUserForm(newUser);
      setUserName("");
      setAge("");

    }
  }

  return (
    <form onSubmit={userFormSubmitHandler}>
      <div>
        <label>Username</label>
        <input type='text' value={userName} onChange={userNameHandler}></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" value={age} onChange={ageHandler}></input>
      </div>
      <button type="submit">+ Add User</button>
    </form>
  );

}

export default UserForm;
