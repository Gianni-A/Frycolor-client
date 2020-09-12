import React, { useState } from 'react';

function FormResponse(props) {
  const[commentRes, setCommentRes] = useState("");

  function sendComment() {
    if(commentRes.length === 0) {
      alert("The input must contain a letter");
    }
    
    setCommentRes("");
    props.addComment(commentRes);
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <textarea className="form-control" rows="2" value={commentRes} onChange={(e) => setCommentRes(e.target.value)}></textarea>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={sendComment}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default FormResponse;