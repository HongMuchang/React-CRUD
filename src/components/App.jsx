import React from "react";
import Button from "./Button";
import Result from "./Result";
import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <div className="result">
        <p>app</p>
      </div>
      <Button text={"jdjd"} />
      <Result />
    </React.Fragment>
  );
};

export default App;
