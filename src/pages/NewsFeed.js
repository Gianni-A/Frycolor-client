import React, { useState, useCallback, useEffect } from 'react';
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

  useEffect(() => {
    const data = {
      userId: 1,
      pagination: 10
    };

    props.getListPost(data);
  }, []);

  function addOrRemoveLike(postId) {
    const data = {
      userId: 1,
      nwId: postId
    }
    props.addRemoveLikePost(data);
  }

  const {listPost, reactionPost, loader, error} = props;

  if(Object.keys(listPost).length > 0) {
    //call the component to
    //console.log(listPost);
  }

  if(Object.keys(error).length > 0) {
    alert('There is an error');
  }
  
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
            {listPost.map((post, index) => (
              <Post  
                key={index}
                postId={post.nwId}
                comment={post.comment}
                url="../../src/assets/images/test.jpg"
                valueLikes={post.contReactions}
                valueComments={post.listResponses.length}
                listResponses={post.listResponses}
                addOrRemoveLike={addOrRemoveLike}
                userLike={post.userLike}
              />
            ))}
            
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