import React, { useState } from "react";

import "./App.css";
import { Modal } from "./Modal";
import { Venue } from "./types";

interface IProps {
  venue: Venue;
}

export function DisplayVenue(props: IProps) {
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  return (
    <div className="resultWrapper">
      <div
        className="resultValue"
        onClick={() => {
          setDisplayModal(true);
        }}
      >
        {props.venue.name}
      </div>
      <Modal display={displayModal} setDisplay={setDisplayModal}>
        <div className="resultModal">
          <h2>{props.venue.name}</h2>
          <p>Business Type = {props.venue.categories[0].name}</p>
          <h3>Address</h3>
          {props.venue.location.formattedAddress.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      </Modal>
    </div>
  );
}
