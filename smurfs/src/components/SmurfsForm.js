import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const SmurfsForm = props => {
  const [newSmurf, setnewSmurf] = useState({
    name: "",
    age: "",
    height: ""
    // id: Date.now()
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurf(newSmurf);
    // setnewSmurf("");
  };
  const handleChanges = e => {
    let name = e.target.name;

    setnewSmurf({ ...newSmurf, [name]: e.target.value });
  };

  return (
    <form className="forms">
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder=""
        value={props.name}
        onChange={handleChanges}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        placeholder=" "
        value={props.age}
        onChange={handleChanges}
      />
      <label>Height</label>
      <input
        type="text"
        name="height"
        placeholder=""
        value={props.height}
        onChange={handleChanges}
      />
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add Smurf
        </button>
      </div>
    </form>
  );
};

export default connect(null, { postSmurf })(SmurfsForm);
