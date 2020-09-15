import React from 'react';

function FormPost({createPost}) {

  function sendData() {
    const inputFile = document.getElementById("file-input");
    const inputComment = document.getElementById("comment-input-post");

    createPost(inputFile.files[0], inputComment.value);
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