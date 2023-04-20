import "./App.css";
import Loader from "./components/Loader";
import Main from "./components/Main";
import "./index.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="App bg-gray-800 flex">
      <Loader />
      <Main />
    </div>
  );
}

export default App;
