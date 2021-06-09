import React from 'react';
import styles from './UserMasterDetail.module.css';
import UserMasterDetailRow from './UserMasterDetailRow.js';

const UserMasterDetail = (props) => {

  return (
    <div>
      {props.users.map(user => {

        return (
          <UserMasterDetailRow key={user.id} user={user} />
        );

      })}
    </div>
  );

}

export default UserMasterDetail;
