import React, { useState ,useEffect } from 'react';
import Header from '../components/HeaderPage';
import Post from '../components/Post';
import FormPost from '../components/FormPost';
import FriendsList from '../components/FriendsList';
import Modal from '../components/Modal';
import { getUserInformationStore } from '../util/Utils';
import Menu from '../components/Menu';
import '../css/newsFeed.css';
import '../css/generalStyle.css';
import $ from 'jquery';

function NewsFeed(props) {

  const[dataId, setDataId] = useState({});
  const[typePost, setTypePost] = useState();

  useEffect(() => {
    const userInformation = getUserInformationStore();
    const data = {
      userId: userInformation.usId,
      pagination: 10
    };

    props.getListPost(data);
  }, []);

  function deleteOptionSelected(id, type) {
    setDataId(id);
    setTypePost(type);
    $('#GeneralModal').modal('show');
  }
  
  function deletePost() {
    //This way to use the same modal
    if(typePost == 'Post') {
      props.deletePost(dataId);
    } else {
      props.deleteResponsePost(dataId);
    }
    $('#GeneralModal').modal('hide');
  }

  const {listPost, listFriends, loader, error, cleanForm} = props;

  //Clean form from publishing a Post (FormPost)
  if(cleanForm) {
    document.getElementById("comment-input-post").value = "";
    document.getElementById("file-input").value = "";
  }
  
  return(
    <section className="main-page">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3 border menu-component">
            <Menu />
          </div>
          <div className="col-md-6 border">
            <FormPost 
              createPost={props.createPost}
            />
            {Object.keys(error).length <= 0 ? listPost.map((post, index) => (
              <Post  
                key={index}
                post={post}
                addOrRemoveLike={props.addRemoveLikePost}
                saveResponsePost={props.saveResponsePost}
                addOrRemoveLikeCom={props.addRemoveLikeCom}
                openModal={deleteOptionSelected}
              />
            )) : <p className="error_post_empty">{error}</p>}
          </div> 
          <div className="col-md-3 border friend-component">
            <FriendsList
              getListFriends={props.getListFriends}
              listFriends={listFriends}
            />
          </div>  
        </div>
        <Modal 
          title={'Delete a post'} 
          acceptButton={() => deletePost()} 
          cancelButton={() => $('#GeneralModal').modal('hide')}>
            <p>Are you sure you want to delete the post selected?</p>
        </Modal>
      </div>
    </section>
  )
}

export default NewsFeed;