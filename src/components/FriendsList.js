import React, { useEffect } from 'react';
import { URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import '../css/friendList.css';

function FriendsList({getListFriends, listFriends}) {
  useEffect(() => {
    getListFriends(1);
  }, []);
  
  return(
    <div>
      {listFriends.map((user, index) => (
        <div key={index}>
          <img src={`${URL_MEDIA_PROFILES}${user.usInfPath_image}`} alt="image friend" className="profile_friend"/>
          <p className="lbl_name_friend">{user.usInfName} {user.usInfLastname}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;