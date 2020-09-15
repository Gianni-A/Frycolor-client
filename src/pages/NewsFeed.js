import React, { useEffect } from 'react';
import Header from '../components/HeaderPage';
import Post from '../components/Post';
import FormPost from '../components/FormPost';
import FriendsList from '../components/FriendsList';
import '../css/newsFeed.css';

function NewsFeed(props) {
  function handleCreatePost(file, comment) {

    const dataForm = {
      file: file != undefined ? file : '',
      comment: comment != undefined ? comment : '',
      userId: 1
    };

    props.createPost(dataForm);
  }

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

  function saveResponsePost(data) {
    props.saveResponsePost(data);
  }

  function addOrRemoveLikeCom(nwResId) {
    const data = {
      userId: 1,
      nwResId
    }
    props.addRemoveLikeCom(data);
  }

  const {listPost, loader, error, cleanForm} = props;

  //Clean form from publishing a Post (FormPost)
  if(cleanForm) {
    document.getElementById("comment-input-post").value = "";
    document.getElementById("file-input").value = "";
  }

  if(Object.keys(listPost).length > 0) {
    //call the component to
    //console.log("cleanForm: ", cleanForm);
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
                addOrRemoveLike={addOrRemoveLike}
                userLike={post.userLike}
                saveResponsePost={saveResponsePost}
                addOrRemoveLikeCom={addOrRemoveLikeCom}
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