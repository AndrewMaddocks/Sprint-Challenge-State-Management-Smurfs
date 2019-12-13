import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

import Smurfs from "./Smurfs";

const SmurfsList = props => {
  useEffect(() => {
    props.getSmurf();
    console.log(`smurf list`, props);
  }, []);

  return (
    <div>
      <div className="smurf-div">
        {props.smurfs.map(smurf => {
          return <Smurfs smurf={smurf} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { getSmurf })(SmurfsList);
