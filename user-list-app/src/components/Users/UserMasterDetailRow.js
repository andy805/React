import React from 'react';

const UserMasterDetailRow = (props) => {

  return (
    <div>
      {props.user.name + "(" + props.user.age + ")"}
    </div>
  );
}

export default UserMasterDetailRow;
