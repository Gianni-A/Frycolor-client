import React, { Component, Fragment } from 'react';
import HeaderPage from '../components/HeaderPage';
import Loader from '../components/Loader';

import { listCountries, listStates, listCities } from '../util/FormOptions';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usInfId: 8,
      usInfName: '',
      usInfLastname: '',
      usInfBirthday: '',
      usInfPath_image: '',
      usInfCountry: 'Mexico',
      usInfState: 'Jalisco',
      usInfCity: 'Guadalajara',
      usInfTsCreated: '2020-06-12 15:12:45'
    };

    //Need to bind these function to use this.setState on the Component
    this.handleChange = this.handleChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
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


  render() {

    const { userInfoUpdated, loader, error } = this.props;

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
          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfName' id="usInfName" placeholder="Name" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfLastname' id="usInfLastname" placeholder="Last Name" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfBirthday' id="usInfBirthday" placeholder="Birthday" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name='usInfPath_image' id="usInfPath_image" placeholder="Path of the image profile" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select className="form-control" id="usInfCountry" onChange={this.handleCountryChange}>
                    {listedCountries}
                  </select>
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select className="form-control" id="usInfState" onChange={this.handleStateChange}>
                    {listedStates}
                  </select>
                </div>
                <div className="form-group">
                  <label>City</label>
                  <select className="form-control" id="usInfCity" onChange={this.handleCityChange}>
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