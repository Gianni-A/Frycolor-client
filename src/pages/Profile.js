import React, { Component } from 'react';
import HeaderPage from '../components/HeaderPage';

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
          <div className="row">
            <div className="col-md-12">
              <p>Componenter de profile</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;