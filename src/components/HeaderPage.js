import React from 'react';
import { getUserInformationStore } from '../util/Utils';

function HeaderPage() {
  const userInformation = getUserInformationStore();
  const { usInfName, usInfLastname } = userInformation.usInfId;

  function logOff() {
    localStorage.clear();
    window.location = "/";
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 border">
          <a href="/newsFeed">Logotipo</a>
        </div>
        <div className="col-md-6 border text-right">
          <button onClick={logOff}>Log out</button>
          <a href={`/profile/${userInformation.usId}`}>{`${usInfName} ${usInfLastname}`}</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderPage;