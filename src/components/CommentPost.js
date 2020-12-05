import React, { useState, useEffect } from 'react';
import { calculatePost, getUserInformationStore } from '../util/Utils';

function CommentPost(props) {
  /*const { userId, nwResId, nameUser, comment, contReactions, userLike, dateTime } = props.response;
  const[statusLikeCom, setStatusLikeCom] = useState(userLike);
  const[countReactionsCom, setCountReactionsCom] = useState(contReactions);
  const[updateResponse, setUpdateResponse] = useState(false);*/
  const[listResponses, setListResponses] = useState(props.listResponses);

  const userInformation = getUserInformationStore();

  useEffect(() => {
    setListResponses(props.listResponses);
  }, [props.listResponses]);


  function showFormToUpdate() {
    if(updateResponse) {
      setUpdateResponse(false);
    } else {
      setUpdateResponse(true);
    }
  }

  function sendEditComment() {
    const comment = document.getElementById('inputComment');
    const data = {
      nwResId,
      comment: comment.value
    };
    
    props.updateResponsePost(data);

    showFormToUpdate();
  }

  //////////////////////////////

  function likeAnimationComment(statusLikeCom, nwResId) {
    
    const objIndex = listResponses.findIndex((obj => obj.nwResId == nwResId));

    let items = [...listResponses];
    let item = {...listResponses[objIndex]};
    
    if(statusLikeCom) {
      item.contReactions -= 1;
      item.userLike = false;
    } else {
      item.contReactions += 1;
      item.userLike = true;
    }

    items[objIndex] = item;
    setListResponses(items);
    
    props.likeAnimationCom(nwResId);
  }

  return listResponses.map((response, index) => (
    <div className="comment_container" key={index}>

      <div className="data_container ">
      

        <div>
          <div className="row">
            <div className="col-md-7">
                <a href="#">{response.nameUser}</a><span className="text-date-post"> - {calculatePost(response.dateTime)}</span>
            </div>
            
            <div className="col-md-1 pull-left">
              {userInformation.usId == response.userId && 
                <div className="dropdown action-take-post float-left">
                  <a  type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={() => props.openModal(response.nwResId,'ResponsePost')}>Delete</a>
                    <a className="dropdown-item" onClick={showFormToUpdate}>Edit</a>
                  </div>
              </div>
              }
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-2">
              <div className={response.userLike ? 'heart is-active' : 'heart'} onClick={() => likeAnimationComment(response.userLike, response.nwResId)}></div>
              <span className="likes_value">{response.contReactions}</span>
            </div>
          </div>
  
          <div className={response.comment != "" ? 'row mt-1 mb-3' : 'row'}>
            <p className="card-text">{response.comment}</p>
          </div>
          
        </div>
        
        
      </div>
    </div>
  
  ))
}

export default CommentPost;