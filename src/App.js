import React, { useState } from "react";
import "./styles.css";

export default function App() {
  [counter, setCounter] = useState(0);
  [amount, setAmount] = useState({ val: 0, curr: "USD" });

  function increment() {
    setCounter(++counter);
  }
  function decrement() {
    setCounter(--counter);
  }
  function setSelectedAmount(e) {
    console.log("e====", e);
    setAmount((amount = e));
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={increment}>+</button>
      <text>{counter}</text>
      <button onClick={decrement}>-</button>
      <div></div>

      <div className="divider"></div>
      <button
        onClick={() => {
          setSelectedAmount({ val: 20, curr: "USD" });
        }}
      >
        20 USD
      </button>
      <div className="divider"></div>
      <button
        onClick={() => {
          setSelectedAmount({ val: 10, curr: "USD" });
        }}
      >
        10 USD
      </button>
      <button
        onClick={() => {
          setSelectedAmount({ val: 30, curr: "USD" });
        }}
      >
        30 USD
      </button>
      <div className="divider"></div>

      <input type="text" />
    </div>
  );
}
