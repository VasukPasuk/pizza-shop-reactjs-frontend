import React from 'react';
import './style.scss';
import {createPortal} from "react-dom";

interface IModalProps {
  children: React.ReactNode
  state: boolean
  stateFunc: React.Dispatch<React.SetStateAction<boolean>>
}

const popupContainer = document.getElementById('popup-container');

function Modal(props: IModalProps) {
  const {children, state = false, stateFunc} = props

  if (!state) {
    return
  }
  console.log(stateFunc)
  return createPortal((
    <div
      id="popup-wrapper"
      data-active={state}
      onClick={() => stateFunc(false)}
      role="dialog"
      aria-modal="true"
    >
      <div id="popup-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ), popupContainer)
}

export default Modal

