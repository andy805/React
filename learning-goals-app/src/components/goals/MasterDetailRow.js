import React from 'react';
import './MasterDetailRow.css'

const MasterDetailRow = (props) => {

  return(
    <div className="masterDetailRow">
    <h5>{props.goal}</h5>
  </div>
  );
}


export default MasterDetailRow;
