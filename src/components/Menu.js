import React from 'react';
import { getUserInformationStore } from '../util/Utils';

function Menu() {
  const userStorage = getUserInformationStore();

  return(
    <div>
      <ul>
      <li><a href="/newsFeed">Main</a></li>
        <li><a href={`/profile/${userStorage.usId}`}>Profile</a></li>
        <li><a href="/friend/request">Friend Request</a></li>
        <li><a href="/changePassword">Change password</a></li>
      </ul>
    </div>
  )
}

export default Menu;