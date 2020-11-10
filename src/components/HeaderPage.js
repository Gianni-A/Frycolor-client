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
    <div className="container">
      <div className="row border">
        <div className="col-md-6">
          <a href="/newsFeed"><img src={Logo} className="logo-img" alt="Logotipo"/></a>          
        </div>
        <div className="col-md-6 text-right">
          <button onClick={logOff}>Log out</button>
          <a href={`/profile/${userInformation.usId}`}>{`${usInfName} ${usInfLastname}`}</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage;