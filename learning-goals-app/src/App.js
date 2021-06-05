import React from 'react';
import MasterDetail from './components/goals/MasterDetail.js';
import NewGoal from './components/InputGoals/NewGoal.js';

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
  return (
    <div>
    <h1> Learning Goals </h1>
    <NewGoal />
    <MasterDetail goals={DUMMY_DATA} />
  </div>
  );
}

export default App;
