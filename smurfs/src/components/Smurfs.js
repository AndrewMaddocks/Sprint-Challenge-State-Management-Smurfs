import React from "react";

const Smurfs = props => {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
    </div>
  );
};

export default Smurfs;
