import React from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={"/contact"}>Contact</Link>
      <hr />
      <div>App</div>
      <Counter />
      <hr />
      <Counter />
    </>
  );
};

export default App;
