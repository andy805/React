import React, {useState} from 'react'
import UserMasterDetail from './components/Users/UserMasterDetail.js'
let gCounter = 5;

const DUMMY_DATA = [
  {
    id: "USER1",
    name: "Andy Velazquez",
    age: 25
  },
  {
    id: "USER2",
    name: "Alyah Davis",
    age: 22
  },
  {
    id: "USER3",
    name: "Marvin Velazquez",
    age: 17
  },
  {
    id: "USER4",
    name: "Jaximus Prime",
    age: 3
  },

]

function App() {
  const[counter, setCounter] = useState(gCounter);
  const[users, setUsers] = useState(DUMMY_DATA);
  return (

    <div>
      <UserMasterDetail users={users} counter={counter} />
    </div>

  );
}

export default App;
