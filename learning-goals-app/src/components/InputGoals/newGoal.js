import React from 'react';
import NewGoalForm from './NewGoalForm.js'

const NewGoal = (props) => {

  const addGoalHandler = (goal) => {
    props.addGoal(goal);
  }

  return (
    <NewGoalForm addGoal={addGoalHandler} counter={props.counter}/>
  );
}

export default NewGoal;
