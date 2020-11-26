import React, { useState } from 'react';
import CommentPost from '../components/CommentPost';
import FormResponse from '../components/FormResponse';
import { URL_MEDIA_POST, URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { getUserInformationStore } from '../util/Utils';
import { calculatePost } from '../util/Utils';
import '../css/post.css';

function Post(props) {
  const { userId, imageProfile, nameUser, nwId, comment, image, contReactions, listResponses, userLike, dateTime } = props.post;
  const[statusSection, setStatusSection] = useState(false);
  const[statusLike, setStatusLike] = useState(userLike);
  const[countReactions, setCountReactions] = useState(contReactions);

  const userInformation = getUserInformationStore();

  function showHideSectionComments() {
    if(statusSection) {
      setStatusSection(false);
    } else {
      setStatusSection(true);
    }    
  }

  function likeAnimation() {
    if(statusLike) {
      setStatusLike(false);
      setCountReactions(countReactions - 1);
    } else {
      setStatusLike(true);
      setCountReactions(countReactions + 1);
    } 
    
    const data = {
      userId: userInformation.usId,
      nwId: nwId
    }
    
    props.addOrRemoveLike(data);
  }

  function addComment(comment) {
    const data = {
      usId: userInformation.usId,
      nwComOriginId: nwId,
      comment: comment
    };

    props.saveResponsePost(data);
  }

  function likeAnimationCom(nwResId) {
    const data = {
      userId: userInformation.usId,
      nwResId
    }
    props.addOrRemoveLikeCom(data);
  }

  function deleteOptionSelectedPost(id,type) {
    const dataId = {
      nwId: id,
      nwResId: 0
    }
    props.openModal(dataId,type);
  }

  function deleteOptionSelectedResponse(id,type) {
    const dataId = {
      nwId: nwId,
      nwResId: id
    }
    props.openModal(dataId,type);
  }

  return(
      <div className="card card_container">    
        <div className="card-body">
          <div className="row">
            <img src={`${URL_MEDIA_PROFILES}${imageProfile}`} alt="image friend" className="post-image-profile"/>
            <a href={`profile/${userId}`} className="mt-2">{nameUser}</a><span className="mt-2 ml-2 text-date-post"> - {calculatePost(dateTime)}</span>
            
            {userInformation.usId == userId && 
            
              <div className="dropdown action-take-post">
                <a  type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" onClick={() => deleteOptionSelectedPost(nwId,'Post')}>Delete</a>
                </div>
            </div>

            }            
            
          </div>
          <div className={props.comment != "" ? 'row mt-3' : 'row'}>
           <p className="card-text">{comment}</p>
          </div>
          
        </div>
        {image &&
          <img className="card-img-top post_image" src={`${URL_MEDIA_POST}${image}`} alt="Card image cap"></img>
        }
        <div>
          <div className="col-md-3 float-left text-left ml-3 mt-2">
            <div className={statusLike ? 'heart is-active' : 'heart'} onClick={likeAnimation}></div>
            <span className="likes_value">{countReactions}</span>
          </div>
          <div className="col-md-3 float-right text-right mr-3 mt-2 commentIcon" onClick={showHideSectionComments}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
            </svg>
            <span className="comments_value"><u>{listResponses.length}</u></span>
          </div>
          
        </div>
        <div className={statusSection ? 'section_comments' : 'section_comments_hide'}>
          {listResponses.map((response, index) => (
            <CommentPost
              key={index} 
              response={response}
              likeAnimationCom={likeAnimationCom}
              openModal={deleteOptionSelectedResponse}
            />
          ))} 
          <FormResponse 
            addComment={addComment}
          />
        </div>
      </div>
  )
}

export default Post;