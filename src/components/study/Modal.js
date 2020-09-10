import React from 'react'

export default function Modal(props){
  return(
    <div className="layer" style={{display: props.show ?'block':'none'}}>
      <div className="ming-modal">
        <div className="modal-top">
          {props.tip}
          <span className="close" onClick={props.onClose}>x</span>
        </div>
        <div className="modal-mid">
          {props.content}
        </div>
        <div className="modal-bot">
          {props.btn}
        </div>
      </div>
    </div>
  )  
}
