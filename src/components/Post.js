import React, { useState } from 'react';
import CommentPost from '../components/CommentPost';
import FormResponse from '../components/FormResponse';
import { URL_MEDIA_POST, URL_MEDIA_PROFILES } from '../util/GlobalVariables';
import { getUserInformationStore } from '../util/Utils';
import '../css/post.css';

function Post(props) {
  const[statusSection, setStatusSection] = useState(false);
  const[statusLike, setStatusLike] = useState(props.userLike);
  const[countReactions, setCountReactions] = useState(props.valueLikes);

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
      nwId: props.postId
    }
    
    props.addOrRemoveLike(data);
  }

  function addComment(comment) {
    const data = {
      usId: userInformation.usId,
      nwComOriginId: props.postId,
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

  return(
      <div className="card card_container">    
        <div className="card-body">
          <div className="row">
            <img src={`${URL_MEDIA_PROFILES}${props.imageUser}`} alt="image friend" className="profile_friend"/>
            <a href="profile" className="mt-2">{props.nameUser}</a>
          </div>
          <div className={props.comment != "" ? 'row mt-3' : 'row'}>
           <p className="card-text">{props.comment}</p>
          </div>
          
        </div>
        {props.image &&
          <img className="card-img-top post_image" src={`${URL_MEDIA_POST}${props.image}`} alt="Card image cap"></img>
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
            <span className="comments_value"><u>{props.valueComments}</u></span>
          </div>
          
        </div>
        <div className={statusSection ? 'section_comments' : 'section_comments_hide'}>
          {props.listResponses.map((response, index) => (
            <CommentPost
              key={index} 
              nwResId={response.nwResId}
              user={response.nameUser}
              comment={response.comment}
              value_likes={response.contReactions}
              likeAnimationCom={likeAnimationCom}
              userLike={response.userLike}
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