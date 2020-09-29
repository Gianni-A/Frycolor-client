import React, { useEffect } from 'react';
import { URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { getUserInformationStore } from '../util/Utils';
import '../css/friendList.css';

function FriendsList({getListFriends, listFriends}) {
  const userInformation = getUserInformationStore();
  useEffect(() => {
    getListFriends(userInformation.usId);
  }, []);
  
  return(
    <div className="list_friends">
      {listFriends.map((user, index) => (
        <div className="row block_profile" key={index}>
          <img src={`${URL_MEDIA_PROFILES}${user.usInfPath_image}`} alt="image friend" className="profile_friend"/>
          <a href={`/profile/${user.usInfId}`} className="lbl_name_friend">{user.usInfName} {user.usInfLastname}</a>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;