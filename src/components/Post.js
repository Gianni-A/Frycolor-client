import React from 'react';
import CommentPost from '../components/CommentPost';
import '../css/post.css';

function Post(props) {
  return(
      <div className="card card_container">    
        <div className="card-body">
          <p className="card-text">{props.comment}</p>
        </div>
        <img className="card-img-top post_image" src={props.url} alt="Card image cap"></img>
        <div>
          <div className="col-md-3 float-left text-left ml-3 mt-2">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          <span className="likes_value">{props.value_likes}</span>
          </div>
          <div className="col-md-3 float-right text-right mr-3 mt-2">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-left-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
            </svg>
            <span className="comments_value">{props.value_comments}</span>
          </div>
          
        </div>
        <div className="section_comments">
          <CommentPost 
            user="Juan parez"
            comment="Esto es un comentario del post, algo mas largo para ver como se ve junto con los likes que aparece de abajo pero despues borra"
            value_likes="10"
          />
          <CommentPost 
            user="Monica sanchez"
            comment="Segundo comentario"
            value_likes="7"
          />
        </div>
      </div>
  )
}

export default Post;