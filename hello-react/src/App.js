import React, { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox
          ref={ref => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;

/*import React from "react";


function App() {
  return <ValidationSample />;
}

export default App;
*/
