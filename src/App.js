import Info from "./Info";
import Counter from "./Counter";
import React, { useState } from "react";

const App = () => {
  // const [visible, setVisible] = useState(false);
  return (
    // <div>
    //   <button onClick={() => setVisible(!visible)}>
    //     {visible ? "숨기기" : "보이기"}
    //   </button>
    //   <hr />
    //   {visible && <Info />}
    // </div>
    <Counter />
  );
};

export default App;
