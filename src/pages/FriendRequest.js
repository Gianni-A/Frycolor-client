import React, { useEffect } from 'react';
import Header from '../components/HeaderPage';
import { getUserInformationStore } from '../util/Utils';
import { URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import Menu from '../components/Menu';
import FriendsList from '../components/FriendsList';
import '../css/generalStyle.css';
import '../css/friendList.css';

function FriendRequest(props) {

  useEffect(() => {
    const userInformation = getUserInformationStore();
    
    props.getListFriendRequest(userInformation.usId);
  }, []);

  function approveRequest(userFriendId) {
    const data = {
      userFriendId: userFriendId,
      action: 'APPROVE'
    }
    
    props.approveRejectRequest(data);
  }

  function rejectRequest(userFriendId) {
    const data = {
      userFriendId: userFriendId,
      action: 'REJECT'
    }
    props.approveRejectRequest(data);
  }

  const { listFriendsRequest, listFriends, actionTook, error, loader } = props;

  return(
    <section className="main-page">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 border menu-component">
            <Menu />
          </div>
          <div className="col-md-6 list-request-content">
            { Object.keys(listFriendsRequest).length > 0 ? listFriendsRequest.map((user, index) => (
              <div className="row item-request" key={index}>
                <div className="col-md-7">
                  <img src={`${URL_MEDIA_PROFILES}${user.frdUsId.usInfId.usInfPath_image}`} alt="image friend" className="profile_friend"/>
                  <a href={`/profile/${user.frdUsId.usInfId.usInfId}`} className="lbl_name_friend">{user.frdUsId.usInfId.usInfName} {user.frdUsId.usInfId.usInfLastname}</a>
                </div>
                
                {Object.keys(actionTook).length <= 0 ? 
                  <div className="col-md-5">
                    <button className="btn btn-danger f-right" onClick={() => rejectRequest(user.frdId)}>Reject</button>
                    <button className="btn btn-success ml-4"  onClick={() => approveRequest(user.frdId)}>Approve</button>
                  </div>
                : <p className="">{actionTook}</p>
                }
                
              </div>
            )) : <p className="error_post_empty">{error[0]}</p>}
          </div> 
          <div className="col-md-3 border friend-component">
            <FriendsList
              getListFriends={props.getListFriends}
              listFriends={listFriends}
            />
          </div>  
        </div>
      </div>
    </section>
  )
}

export default FriendRequest;