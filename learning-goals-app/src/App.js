import React, {useState} from 'react';
import MasterDetail from './components/goals/MasterDetail.js';
import NewGoal from './components/InputGoals/NewGoal.js';
let COUNTER = 5;

const DUMMY_DATA = [
  {
    id:"GOL1",
    goal: "Finish Section 6 Styling react components"
  },
  {
    id:"GOL2",
    goal: "Finish section 8 debugging"
  },
  {
    id:"GOL3",
    goal: "Finish this little project"
  },
  {
    id:"GOL4",
    goal: "Read Node Js book chapter 1"
  },
];

function App() {
  const [goalArray, setGoalArray] = useState(DUMMY_DATA);
  const [counter, setCounter] = useState(COUNTER);
  const addGoalHandler = (goal) => {
    setCounter(prevState => {
      return prevState + 1;
    });
    setGoalArray(prevState => {
      return [goal, ...prevState];
    });
  }

  return (
    <div>
    <h1> Learning Goals </h1>
    <NewGoal addGoal={addGoalHandler} counter={counter}/>
    <MasterDetail goals={goalArray} />
  </div>
  );
}

export default App;
