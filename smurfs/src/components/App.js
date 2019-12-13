import React from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";

function App() {
  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfsList />
      <SmurfsForm />
    </div>
  );
}

export default App;
