import React from 'react';
import { getUserInformationStore } from '../util/Utils';
import '../css/HeaderPage.css';

import Logo from '../assets/components/logo.jpg';

function HeaderPage() {
  const userInformation = getUserInformationStore();
  const { usInfName, usInfLastname } = userInformation.usInfId;

  function logOff() {
    localStorage.clear();
    window.location = "/";
  }

  return(
    <div className="container header-component">
      <div className="row border">
        <div className="col-md-9">
          <a href="/newsFeed"><img src={Logo} className="logo-img" alt="Logotipo"/></a>          
        </div>
        
        <div className="col-md-3 content-profile-menu">
          
          <a className="text-link-profile" href={`/profile/${userInformation.usId}`}>{`${usInfName} ${usInfLastname}`}</a>
          
          <a  type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3.544 6.295A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537z"/>
              <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#" onClick={logOff}>Log out</a>
            <a className="dropdown-item" href="/changePassword">Change password</a>
          </div>
        </div>


        


      </div>
    </div>
  )
}

export default HeaderPage;