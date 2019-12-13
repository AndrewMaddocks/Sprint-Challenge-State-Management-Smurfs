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
    <form>
      <input
        type="text"
        name="name"
        placeholder="add smurf name "
        value={props.name}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="age"
        placeholder="add smurf age "
        value={props.age}
        onChange={handleChanges}
      />
      <input
        type="text"
        name="height"
        placeholder="add smurf height "
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
