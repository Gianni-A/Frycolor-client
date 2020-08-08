import React from 'react';

function FormPost({createPost, setComment, setPath}) {
  return(
    <div className="form_post_container">
      <form>
        <div className="image-upload">
          <label htmlFor="file-input">
            <img src="../../src/assets/components/gallery.png"/>
          </label>
          <input id="file-input" onChange={(e) => setPath(e.target.value)} type="file" />
        </div>
        <div className="form-group">
        <label htmlFor="example">What are you feeling now?</label>
        <textarea className="form-control" onChange={(e)=> setComment(e.target.value)} rows="3"></textarea>
        </div>
      </form>
      <button className="btn btn-primary btn-block" onClick={() => createPost()}>Post</button>
    </div>
  )
}

export default FormPost;