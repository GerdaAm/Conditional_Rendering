import React from "react";
import Login from "./Login";

// var isLoggedIn = true;
var currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {/* below check first expression, if false does not check second expression */}
      {/* {currentTime > 7 && currentTime < 9 ? <h1>You're late!</h1> : null} */}
      {/* {currentTime < 12 ? <h1>Wake up!</h1> : null} */}
      {currentTime < 12 && <h1>Wake up!</h1>}
    </div>
  );
}

export default App;
