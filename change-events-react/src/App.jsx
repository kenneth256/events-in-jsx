import { useState } from "react";

import "./App.css";

function App() {
  const handleChange = (event) => {
    event.preventDefault();
    alert(event.target.value);
  };
  const mengo = (event) => {
    event.preventDefault();
    console.log("Welcome");
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter your name"
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          type="number"
          placeholder="enter number"
        />
        <button onClick={mengo}>Submit</button>
      </form>
    </div>
  );
}

export default App;
