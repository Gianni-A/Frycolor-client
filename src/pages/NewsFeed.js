import React, { useState, useCallback} from 'react';
import Header from '../components/HeaderPage';
import Post from '../components/Post';
import FormPost from '../components/FormPost';
import FriendsList from '../components/FriendsList';
import '../css/newsFeed.css';

function NewsFeed(props) {
  const [commentPost, setCommentPost] = useState();
  const [pathImagePost, setPathImagePost] = useState();
  const handleCreatePost = useCallback(() => {

    const dataForm = {
      file: pathImagePost,
      comment: commentPost,
      userId: 7
    };

    props.createPost(dataForm);
  });
  
  return(
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 border">
            Menu with some options
          </div>
          <div className="col-md-6 border">
            <FormPost 
              createPost={handleCreatePost}
              setComment={setCommentPost}
              setPath={setPathImagePost}
            />
            <Post  
              comment="Esto es solo un comentario"
              url="../../src/assets/images/test.jpg"
              value_likes="10"
              value_comments="5"
              list_comments="array"
            />
            
          </div> 
          <div className="col-md-3 border">
            <FriendsList />
          </div>  
        </div>
      </div>
    </section>
    
  )
}

export default NewsFeed;