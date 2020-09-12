import React, { useState } from 'react';

function CommentPost(props) {
  const[statusLikeCom, setStatusLikeCom] = useState(props.userLike);
  const[countReactionsCom, setCountReactionsCom] = useState(props.value_likes);

  function likeAnimationComment() {
    if(statusLikeCom) {
      setStatusLikeCom(false);
      setCountReactionsCom(countReactionsCom - 1);
    } else {
      setStatusLikeCom(true);
      setCountReactionsCom(countReactionsCom + 1);
    }   
    
    props.likeAnimationCom(props.nwResId);
  }

  return(
    <div className="comment_container">

      <div className="data_container ">
        <div className="row">
          <div className="col-md-10">
            <div className="username_comment">
              <a href="#">{props.user}</a>
            </div>
            <div className="text_comment">
              <p>{props.comment}</p>
            </div>
          </div>

          <div className="col-md-2">
            <div className={statusLikeCom ? 'heart is-active' : 'heart'} onClick={likeAnimationComment}></div>
            <span className="likes_value">{countReactionsCom}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentPost;