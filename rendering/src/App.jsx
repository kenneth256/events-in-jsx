import React from "react";
import { useState } from "react";

//Loader
function Load() {
  return <p style={{ color: 'blue' }}>Load<span style={{ color: 'green' }}>ing</span><span style={{color: 'yellow'}}>...loaded</span></p>
};
//Content
function Content() {
  return <p style={{ color: 'red' }}>
    React is a javascript library used for make webs.
    <span style={{color:'white'}}>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js</span>
  </p>
};

function App() {
  const [isloading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 5000
  )

  return (
    <div>
      {isloading ? <Load /> : <Content />}
    </div>
  )
}

export default App
