import React from "react";
import "./App.css";
import SmurfsList from "./SmurfsList";
import SmurfsForm from "./SmurfsForm";

function App() {
  return (
    <div className="App">
      <SmurfsList />
      <div className="header">
        <h1>Welcome To The Village!</h1>
        <SmurfsForm />
      </div>
    </div>
  );
}

export default App;
