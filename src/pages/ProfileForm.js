import React, { Component, Fragment } from 'react';
import HeaderPage from '../components/HeaderPage';
import Loader from '../components/Loader';
import { SERVER, URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { getUserInformationStore } from '../util/Utils';

import { listCountries, listStates, listCities } from '../util/FormOptions';

class ProfileForm extends Component {
  constructor(props) {
    const userInformation = getUserInformationStore();
    super(props);
    this.state = userInformation.usInfId;

    //Need to bind these function to use this.setState on the Component
    this.handleChange = this.handleChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  async componentDidMount() {
    let response = await fetch(`${SERVER}/profile/${this.props.match.params.userId}`);

    response.json().then(data => {
      this.setState({
        usInfId: data.usInfId,
        usInfName: data.usInfName,
        usInfLastname: data.usInfLastname != null ? data.usInfLastname : '',
        usInfBirthday: data.usInfBirthday != null ? data.usInfBirthday : '',
        usInfCountry: data.usInfCountry != null ? data.usInfCountry : 'Mexico',
        usInfState: data.usInfState != null ? data.usInfState : 'Jalisco',
        usInfCity: data.usInfCity != null ? data.usInfCity : 'Guadalajara',
        usInfPath_image: data.usInfPath_image != null ? data.usInfPath_image : ''
      });
    }); 
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleCountryChange(event) {
    this.setState({usInfCountry: event.target.value});
  }

  handleStateChange(event) {
    this.setState({usInfState: event.target.value});
  }

  handleCityChange(event) {
    this.setState({usInfCity: event.target.value});
  }

  async handleSendData() {
    await this.props.saveInformation(this.state);
  }

  componentDidUpdate(prevState, prevProps) {
    //Set the state to usInfCountry state
    const filterStates = listStates.filter(obj => obj.country == this.state.usInfCountry);
    if(this.state.usInfCountry != prevProps.usInfCountry) {
      this.setState({usInfState: filterStates[0].value});
    }

    //Set the city to usInfCity state
    const filterCities = listCities.filter(obj => obj.states == this.state.usInfState);
    if(this.state.usInfState != prevProps.usInfState) {
      this.setState({usInfCity: filterCities[0].value});
    }
  }

  setPathImage() {
    //const image = pathImage.split("\\");
    const inputImage = document.getElementById("inputImageProfile");
    //this.setState({usInfPath_image: inputImage.files[0]});
    this.props.saveImageProfile(inputImage.files[0], this.state.usInfId);
  }


  render() {

    const { imageProfile, userInfoUpdated, loader, error } = this.props;
    

    //Listed countries
    const listedCountries = listCountries.map(country => 
      <option value={country.value} key={country.value}>{country.label}</option>
    );

    //Listed states
    const filterStates = listStates.filter(obj => obj.country == this.state.usInfCountry);
    const listedStates = filterStates.map(obj =>
      <option value={obj.value} key={obj.value}>{obj.label}</option>
    );

    //Listed cities
    const filterCities = listCities.filter(obj => obj.states == this.state.usInfState);
    const listedCities = filterCities.map(obj => 
      <option value={obj.value} key={obj.value}>{obj.label}</option>
    );

    let componentImage = <img src={`${URL_MEDIA_PROFILES}${this.state.usInfPath_image}`} alt="image friend" className="form_image_profile"/>;
    if(Object.keys(imageProfile).length > 0) {
      componentImage = <img src={`${URL_MEDIA_PROFILES}${imageProfile.usInfPath_image}`} alt="image friend" className="form_image_profile"/>;
    }

    //Message when the update is success
    if(Object.keys(userInfoUpdated).length > 0) {
      alert("User Updated");
    }

    //Message when there is an error
    if(Object.keys(error).length > 0) {
      alert("There is an error to update the user");
    }


    return (
      <Fragment>
        <HeaderPage />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  {componentImage}
                </div>
                <div className="col-md-11 mt-3">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputImageProfile" onChange={() => this.setPathImage()} />
                    <label className="custom-file-label" htmlFor="customFile">{this.state.usInfPath_image}</label>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-md-6">
              <form>
                <div className="form-group">
                <input type="text" className="form-control" name='usInfName' id="usInfName" value={this.state.usInfName} placeholder="Name" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfLastname' id="usInfLastname" value={this.state.usInfLastname} placeholder="Last Name" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfBirthday' id="usInfBirthday" value={this.state.usInfBirthday} placeholder="Birthday" onChange={(e) => this.handleChange(e)} />
                </div>
                
                <div className="form-group">
                  <label>Country</label>
                  <select value={this.state.usInfCountry} className="form-control" id="usInfCountry" onChange={this.handleCountryChange}>
                    {listedCountries}
                  </select>
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select value={this.state.usInfState} className="form-control" id="usInfState" onChange={this.handleStateChange}>
                    {listedStates}
                  </select>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <select value={this.state.usInfCity} className="form-control" id="usInfCity" onChange={this.handleCityChange}>
                    {listedCities}
                  </select>
                </div>
              </form>
              <button className="btn btn-primary btn-block" onClick={() => this.handleSendData()}>Update Profile</button>
            </div>
            {loader && <Loader />}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProfileForm;