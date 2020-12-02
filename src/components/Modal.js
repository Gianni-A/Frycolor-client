import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props) {
  return ReactDOM.createPortal(
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
            <button type="button" className="close" onClick={props.cancelButton} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={props.cancelButton}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={props.acceptButton}>Accept</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal'));
}

export default Modal;