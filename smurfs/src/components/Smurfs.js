import React from "react";

const Smurfs = props => {
  return (
    <div className="outtersmurfcard">
      <div className="smurfcard">
        <h2>Name-{props.smurf.name}</h2>
        <h3>Age-{props.smurf.age}</h3>
        <h3>Height- {props.smurf.height}</h3>
      </div>
    </div>
  );
};

export default Smurfs;
