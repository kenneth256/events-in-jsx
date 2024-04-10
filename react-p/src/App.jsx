import React from "react";
import { useState } from "react";

//Londer component
function Loader() {
  return (
    <div>
      <h1 className="Loader">Loading...<span style={{color: 'red'}}>be patient</span></h1>
    </div>
  );
}
// content component
function Content() {
  return (
    <div>
      <p>
        First, a little bit of housekeeping. To celebrate the launch of the new
        docs and, more importantly, to clearly separate the old and the new
        content, weve moved to the shorter react.dev domain. The old
        reactjs.org domain will now redirect here. The old React docs are now
        archived at legacy.reactjs.org. All existing links to the old content
        will automatically redirect there to avoid “breaking the web”, but the
        legacy site will not get many more updates. Believe it or not, React
        will soon be ten years old. In JavaScript years, it is like a whole
        century! We ve refreshed the React homepage to reflect why we think
        React is a great way to create user interfaces today, and updated the
        getting started guides to more prominently mention modern React-based
        frameworks.
      </p>
    </div>
  );
}

//render 
function App(){
   const [isLoading, setLoading] = useState(true)
setTimeout(()=> {
  setLoading(false)
}, 10000);
return (
  <div>
    {isLoading ? <Loader /> : <Content />}
  </div>
)

}

export default App;
