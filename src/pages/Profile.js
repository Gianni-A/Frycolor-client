import React, { Component } from 'react';
import HeaderPage from '../components/HeaderPage';
import { URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { calculateAge, getUserInformationStore } from '../util/Utils';
import '../css/profile.css';

import FriendsList from '../components/FriendsList';
import UserPhotos from '../components/UserPhotos';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getUserInformation();
  }

  async getUserInformation() {
    const userStore = getUserInformationStore();
    await this.props.getUserInformation(this.props.match.params.userId, userStore.usId);
  }

  addRejectFriendRequest(friendTableId) {
    const data = {
      userFriendId: friendTableId,
      action: 'APPROVE'
    }

    this.props.approveRejectRequest(data);
  }

  render() {
    const {user_information, statusFriend, friendTableId, getListFriends, listFriends, getListPhotos, listPhotos, addFriend, deleteFriend, error} = this.props;
    const userIdParam = this.props.match.params.userId;
    const userStore = getUserInformationStore();
    const age = calculateAge(user_information.usInfBirthday);
    
    //Shows and Hide button friend
    let buttonFriend;
    switch(statusFriend) {
      case 'ACTIVE':
        buttonFriend = 
        <button type="button" className="btn btn-danger" onClick={() => deleteFriend(userStore.usId, userIdParam)}>
          Delete friend
        </button>;
        break;

      case 'PEND':
        buttonFriend = 
        <button type="button" className="btn btn-secondary" onClick={() => deleteFriend(userStore.usId, userIdParam)}>
          Cancel request
        </button>;
        break;

      case 'UNKNOWN':
        buttonFriend = 
        <button type="button" className="btn btn-info" onClick={() => addFriend(userStore.usId, userIdParam)}>
          Add friend
        </button>;
        break;

      case 'RESPONSE':
        buttonFriend = 
        <button type="button" className="btn btn-success" onClick={() => this.addRejectFriendRequest(friendTableId)}>
          Approve request
        </button>;
        break;

    }
    
    const profileData = <form>
    <div className="row">
      <div className="col-md-3 border-left">
        <img src={`${URL_MEDIA_PROFILES}${user_information.usInfPath_image}`}  className="profile_image"/>
      </div>
      <div className="col-md-3">
        <div className="row">
          <p>Nombre completo: {`${user_information.usInfName} ${user_information.usInfLastname}`}</p>
        </div>
        <div className="row">
          <p>Edad: {age}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
            <div className="col-md-9">
              <div className="row">
                <p>Pais: {user_information.usInfCountry}</p>
              </div>
              <div className="row">
                <p>Estado: {user_information.usInfState}</p>
              </div>
              <div className="row">
                <p>Ciudad: {user_information.usInfCity}</p>
              </div>
            </div> 
            <div className="col-md-3">
              {userStore.usId == userIdParam && 
              <button type="button" className="btn btn-primary">
                <a href={`/editProfile/${user_information.usInfId}`} className="text-white">Edit</a>
              </button>
              }
            </div>
        </div>
        <div className="row">
          {userStore.usId != userIdParam && 
            <div className="col-md-10">
              {buttonFriend}
            </div>
          }
          
        </div>
      </div>
      <div className="col-md-3 border">
        <FriendsList
          getListFriends={getListFriends}
          listFriends={listFriends}
        />
      </div>
    </div>
  </form>;

    return(
      <div>
        <HeaderPage />
        <div className="container">
          {profileData}
          <div className="row">
            <div className="col-md-12 border">
              <UserPhotos 
                userId={user_information.usInfId}
                getListPhotos={getListPhotos}
                listPhotos={listPhotos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;