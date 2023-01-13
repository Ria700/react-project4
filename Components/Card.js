import React from "react";

export default function Card(props) {
  return (
    <div id="main">
      <div>
        <img id="card--img" src={props.imageUrl} />
      </div>
      <div id='section2'>
        <div id="loc">
          <img src="../images/loc.png" />
          <p id='cty'> {props.location.toUpperCase()} </p>
          <a href={props.googleMapsUrl}>
            <p>View on Google Maps</p>
          </a>
        </div>
        <h1>{props.title}</h1>
        <h6>
          {props.startDate} - {props.endDate}
        </h6>
        <p id="description">{props.description}</p>
      </div>
    </div>
  );
}
