import React from 'react';
import './MasterDetailRow.css'

const MasterDetailRow = (props) => {

  return(
    <div className="masterDetailRow">
    {props.goal}
  </div>
  );
}


export default MasterDetailRow;
