import React, { Component } from 'react';
import HeaderPage from '../components/HeaderPage';
import { URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { calculateAge } from '../util/Utils';
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
    await this.props.getUserInformation(1);
  }

  render() {
    const {user_information, error} = this.props;
    const age = calculateAge(user_information.usInfBirthday);
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
              <button type="button" className="btn btn-primary">
                <a href="/editProfile" className="text-white">Edit</a>
              </button>
            </div>
        </div>
      </div>
      <div className="col-md-3 border">
        <FriendsList
          getListFriends={this.props.getListFriends}
          listFriends={this.props.listFriends}
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
              <UserPhotos />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;