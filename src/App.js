import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the counter value
  const [counterValue, setCounterValue] = useState(0);

  // Function to handle increment
  const handleIncrease = () => {
    setCounterValue(counterValue + 1); // Increment the counter value
  };

  // Function to handle decrement
  const handleDecrease = () => {
    setCounterValue(counterValue - 1); // Decrement the counter value
  };

  // Function to handle reset
  const handleReset = () => {
    setCounterValue(0); // Reset the counter value to 0
  };

  return (
    <div className="counter-container">
      <h1>Simple Counter App</h1>

      {/* Display the current counter value */}
      <div className="counter-value">{counterValue}</div>

      {/* Buttons for controlling the counter */}
      <button className="increase" onClick={handleIncrease}>
        Increase
      </button>
      <button className="decrease" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);

//   // Function to handle increment
//   const handleIncrease = () => {
//     if (counter < 10) {
//       setCounter(counter + 1);
//     } else {
//       setCounter(0);
//     }
//   };

//   // Function to handle decrement
//   const handleDecrease = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     } else {
//       setCounter(10);
//     }
//   };

//   // Function to handle reset
//   const handleReset = () => {
//     setCounter(0);
//   };

//   return (
//     <div className="counter-container">
//       <h1>Counter App</h1>
//       <div className="counter-value">{counter}</div>
//       <button className="increase" onClick={handleIncrease}>
//         Increase
//       </button>
//       <button className="decrease" onClick={handleDecrease}>
//         Decrease
//       </button>
//       <button className="reset" onClick={handleReset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;

