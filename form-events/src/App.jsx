import React from "react";
import "./App.css";

function App() {
  const submit = (event) => {
     event.preventDefault();
    const elements = event.target.elements;
    const {name, email, tel} = elements;
    console.log(tel.value, name.value, email.value)
  };
  return (
    <section>
      <form onSubmit={submit}>
        <div className="container">
          <input type="text" placeholder="Enter your name"  name="name"/>
          <input type="email" placeholder="Enter email" name="email" />
          <input type="tel" placeholder="enter telephone no:" name="tel" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}
export default App;
