import React from 'react';
import '../css/friendList.css';

function FriendsList() {
  return(
    <div>
      <img src="../../src/assets/images/test.jpg" alt="image friend" className="profile_friend"/>
      <p className="lbl_name_friend">Name of the friend</p>
    </div>
  );
}

export default FriendsList;