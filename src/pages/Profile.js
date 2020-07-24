import React, { Component } from 'react';
import HeaderPage from '../components/HeaderPage';
import '../css/profile.css';

import FriendsList from '../components/FriendsList';
import UserPhotos from '../components/UserPhotos';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.getUserInformation();
  }

  async getUserInformation() {
    await this.props.getUserInformation(7);
  }

  render() {
    const {user_information, error} = this.props;

    return(
      <div>
        <HeaderPage />
        <div className="container">
          <form>
            <div className="row">
              <div className="col-md-3 border">
                <img src="../../src/assets/images/test.jpg"  className="profile_image"/>
              </div>
              <div className="col-md-3 border">
                <div className="row">
                  <p>Nombre completo:</p>
                  <p>Carlos montreal</p>
                </div>
                <div className="row">
                  <p>Edad:</p>
                  <p>25 anos</p>
                </div>
              </div>
              <div className="col-md-3 border">
                <div className="row">
                    <button type="button" className="btn btn-primary btn-ls float-right">
                      <a href="/editProfile">Edit</a>
                    </button>
                </div>
                <div className="row">
                  <p>Pais:</p>
                  <p>Mexico</p>
                </div>
                <div className="row">
                  <p>Estado:</p>
                  <p>Jalisco</p>
                </div>
                <div className="row">
                  <p>Ciudad:</p>
                  <p>Guadalajara</p>
                </div>
              </div>
              <div className="col-md-3 border">
                <FriendsList />
              </div>
            </div>
          </form>
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