import React from 'react';

function FormPost({createPost}) {

  function sendData() {
    const inputFile = document.getElementById("file-input").files[0];
    const inputComment = document.getElementById("comment-input-post").value;

    const dataForm = {
      file: inputFile != undefined ? inputFile : '',
      comment: inputComment != undefined ? inputComment : '',
      userId: 1
    };

    createPost(dataForm);
  }
  
  return(
    <div className="form_post_container">
      <form>
        <div className="image-upload">
          <label htmlFor="file-input">
            <img src="../../src/assets/components/gallery.png"/>
          </label>
          <input id="file-input" type="file" />
        </div>
        <div className="form-group">
          <label htmlFor="example">What are you feeling now?</label>
          <textarea className="form-control" id="comment-input-post" rows="3"></textarea>
        </div>
      </form>
      <button className="btn btn-primary btn-block" onClick={() => sendData()}>Post</button>
    </div>
  )
}

export default FormPost;