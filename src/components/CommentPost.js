import React, { useState } from 'react';
import { calculatePost } from '../util/Utils';

function CommentPost(props) {
  const[listResponses, setListResponses] = useState(props.listResponses);

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
        <div className="row">
          <div className="col-md-10">
            <div className="username_comment">
            <a href="#">{response.nameUser}</a><span className="text-date-post"> - {calculatePost(response.dateTime)}</span>
            </div>
            <div className="text_comment">
              <p>{response.comment}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={response.userLike ? 'heart is-active' : 'heart'} onClick={() => likeAnimationComment(response.userLike, response.nwResId)}></div>
            <span className="likes_value">{response.contReactions}</span>
          </div>
        </div>
      </div>
  </div>
  ))
}

export default CommentPost;