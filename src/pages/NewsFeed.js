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
    $('#delete_post').modal('show');
  }
  
  function deletePost() {
    //This way to use the same modal
    if(typePost == 'Post') {
      props.deletePost(dataId);
    } else {
      props.deleteResponsePost(dataId);
    }
    $('#delete_post').modal('hide');
  }

  const {listPost, listFriends, loader, error, cleanForm} = props;

  console.log(cleanForm)
  
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
              cleanForm={cleanForm}
            />
            {Object.keys(error).length <= 0 ? listPost.map((post, index) => (
              <Post  
                key={index}
                post={post}
                addOrRemoveLike={props.addRemoveLikePost}
                saveResponsePost={props.saveResponsePost}
                addOrRemoveLikeCom={props.addRemoveLikeCom}
                openModal={deleteOptionSelected}
                updateResponsePost={props.updateResponsePost}
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
          id={'delete_post'}
          title={'Delete a post'}
          acceptButton={() => deletePost()} 
          cancelButton={() => $('#delete_post').modal('hide')}>
            <p>Are you sure you want to delete the post selected?</p>
        </Modal>
      </div>
    </section>
  )
}

export default NewsFeed;