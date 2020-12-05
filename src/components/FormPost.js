import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import { getUserInformationStore } from '../util/Utils';
import $ from 'jquery';

function FormPost({createPost, cleanForm}) {
  const[imageCheck, setImageCheck] = useState('d-none');
  const[titleImage, setTitleImage] = useState('');

  const userInformation = getUserInformationStore();

  function sendData() {
    const inputFile = document.getElementById("file-input").files[0];
    const inputComment = document.getElementById("comment-input-post").value;

    const dataForm = {
      file: inputFile != undefined ? inputFile : '',
      comment: inputComment != undefined ? inputComment : '',
      userId: userInformation.usId
    };

    createPost(dataForm);
  }

  useEffect(() => {
    if(cleanForm) {
      setImageCheck('d-none');
      document.getElementById("file-input").value = "";
      document.getElementById("comment-input-post").value = "";
    }
  }, [cleanForm]);

  //Add or remove the ready image icon to notify to the user
  const reviewImage = removeImage => {
    const isImage = document.getElementById("file-input").files[0];
    if(isImage.name && removeImage === false) {
      setImageCheck('check-image-form');
      setTitleImage(isImage.name);
    } else {
      setImageCheck('d-none');
      document.getElementById("file-input").value = '';
      $('#remove_image').modal('hide');
    }
  };
  
  return(
    <div className="form_post_container">
      <form>
        <div className="image-upload">
          <label htmlFor="file-input">
            <img src="../../src/assets/components/gallery.png" style={{cursor: 'pointer'}}/>
          </label>
          <input id="file-input" type="file" onChange={() => reviewImage(false)} />
        </div>
        <div className={imageCheck} onClick={() => $('#remove_image').modal('show')}>
          <img src="../../src/assets/components/image_ready.png" title={titleImage} />
        </div>
        <div className="form-group">
          <label htmlFor="example">What are you feeling now?</label>
          <textarea className="form-control" id="comment-input-post" rows="3"></textarea>
        </div>
      </form>
      <button className="btn btn-primary btn-block" onClick={() => sendData()}>Post</button>
      <Modal 
          id={'remove_image'}
          title={'Remove the image selected'} 
          acceptButton={() => reviewImage(true)} 
          cancelButton={() => $('#remove_image').modal('hide')}>
            <p>Do you want to remove the image for a Post?</p>
        </Modal>
    </div>
  )
}

export default FormPost;