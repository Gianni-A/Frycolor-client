import React, { useEffect } from 'react';
import { URL_MEDIA_POST } from '../util/GlobalVariables';
import { getUserInformationStore } from '../util/Utils';

function UserPhotos({getListPhotos, listPhotos}) {
  const userInformation = getUserInformationStore();
  useEffect(() => {
    //Needs userId
    getListPhotos(userInformation.usId);
  }, []);

  if(listPhotos.length == 0) {
    return <p className="error-photos">There is no photos here</p>
  }

  return(
    <div className="container container-user-photos">
      {listPhotos.map((photo, index) => (
      <div className="user-photo" key={index}>
          <img src={`${URL_MEDIA_POST}${photo.image}`} alt="Image" className="imagesUser" />
          <div className="info-image">
          <p>{photo.contReactions}</p>
          </div>
      </div>
      ))}
    </div>
    
  );
}

export default UserPhotos;