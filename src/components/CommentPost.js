import React, { useState } from 'react';
import { calculatePost, getUserInformationStore } from '../util/Utils';

function CommentPost(props) {
  const { userId, nwResId, nameUser, comment, contReactions, userLike, dateTime } = props.response;
  const[statusLikeCom, setStatusLikeCom] = useState(userLike);
  const[countReactionsCom, setCountReactionsCom] = useState(contReactions);
  const[updateResponse, setUpdateResponse] = useState(false);
  const[globalComment, setGlobalComment] = useState(comment);

  const userInformation = getUserInformationStore();

  function likeAnimationComment() {
    if(statusLikeCom) {
      setStatusLikeCom(false);
      setCountReactionsCom(countReactionsCom - 1);
    } else {
      setStatusLikeCom(true);
      setCountReactionsCom(countReactionsCom + 1);
    }   
    
    props.likeAnimationCom(nwResId);
  }

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

  return(
    <div className="comment_container">

      <div className="data_container ">
      {updateResponse ? 
        
        <div className="row pt-2 pb-3">
          <div className="col-md-7">
          <textarea id="inputComment" className="form-control" rows="2" cols="50">{globalComment}</textarea>
          </div>
          <div className="col-md-2 cancel-button-response">
            <a onClick={showFormToUpdate}>cancel</a>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary float-right mt-2 btn-response-edit" onClick={sendEditComment}>Edit</button>
          </div>  
        </div>

        :

        <div>
          <div className="row">
            <div className="col-md-7">
                <a href="#">{nameUser}</a><span className="text-date-post"> - {calculatePost(dateTime)}</span>
            </div>
            
            <div className="col-md-1 pull-left">
              {userInformation.usId == userId && 
                <div className="dropdown action-take-post float-left">
                  <a  type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={() => props.openModal(nwResId,'ResponsePost')}>Delete</a>
                    <a className="dropdown-item" onClick={showFormToUpdate}>Edit</a>
                  </div>
              </div>
              }
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-2">
              <div className={statusLikeCom ? 'heart is-active' : 'heart'} onClick={likeAnimationComment}></div>
              <span className="likes_value">{countReactionsCom}</span>
            </div>
          </div>
  
          <div className={props.comment != "" ? 'row mt-1 mb-3' : 'row'}>
            <p className="card-text">{comment}</p>
          </div>
          
        </div>
        
        }
      </div>
    </div>
  )
}

export default CommentPost;