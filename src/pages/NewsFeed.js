import React, { useEffect } from 'react';
import Header from '../components/HeaderPage';
import Post from '../components/Post';
import FormPost from '../components/FormPost';
import FriendsList from '../components/FriendsList';
import { getUserInformationStore } from '../util/Utils';
import '../css/newsFeed.css';

function NewsFeed(props) {
  useEffect(() => {
    const userInformation = getUserInformationStore();
    const data = {
      userId: userInformation.usId,
      pagination: 10
    };

    props.getListPost(data);
  }, []);

  const {listPost, listFriends, loader, error, cleanForm} = props;

  //Clean form from publishing a Post (FormPost)
  if(cleanForm) {
    document.getElementById("comment-input-post").value = "";
    document.getElementById("file-input").value = "";
  }

  if(Object.keys(listPost).length > 0) {
    //Set a component where it says 'there is no records'
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
              createPost={props.createPost}
            />
            {listPost.map((post, index) => (
              <Post  
                key={index}
                imageUser={post.imageProfile}
                nameUser={post.nameUser}
                postId={post.nwId}
                comment={post.comment}
                image={post.image}
                valueLikes={post.contReactions}
                valueComments={post.listResponses.length}
                listResponses={post.listResponses}
                addOrRemoveLike={props.addRemoveLikePost}
                userLike={post.userLike}
                saveResponsePost={props.saveResponsePost}
                addOrRemoveLikeCom={props.addRemoveLikeCom}
              />
            ))}
          </div> 
          <div className="col-md-3 border">
            <FriendsList
              getListFriends={props.getListFriends}
              listFriends={listFriends}
            />
          </div>  
        </div>
      </div>
    </section>
    
  )
}

export default NewsFeed;