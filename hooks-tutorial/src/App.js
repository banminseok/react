<<<<<<< HEAD
import React from "react";
import Info from "./Info";

const App = () => {
  return <Info />;
};

=======
import React, { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};
>>>>>>> 03da6a5060d0f3bb1ff732c85c9933ee49ba74e9
export default App;
