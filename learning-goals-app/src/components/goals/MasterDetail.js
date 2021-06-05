import React from 'react';

import MasterDetailRow from './MasterDetailRow.js'
import "./MasterDetail.css"

const MasterDetail = (props) => {

  const rows = props.goals;

  return (
    <div className="masterDetail">
      {rows.map(goal => {return(<MasterDetailRow goal={goal.goal} key={goal.id} />)})}
    </div>
  )

}

export default MasterDetail;
