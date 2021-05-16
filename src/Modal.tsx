import React from "react";
import "./App.css";

interface IProps {
  children?: React.ReactNode;
  display: boolean;
  setDisplay: (toSet: boolean) => void;
}

export function Modal(props: IProps) {
  if (!props.display) {
    return <React.Fragment />;
  } else {
    return (
      <div className="outer-modal">
        <div className="modal-content">
          <div
            onClick={() => props.setDisplay(false)}
            className="modal-close-button"
          >
            X
          </div>
          <br />
          {props.children}
        </div>
      </div>
    );
  }
}
