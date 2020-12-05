import React from "react";
import "./styles.css";
import { useCounterActions } from "./store/context";
import Counter from "./components/counter";

export default function App() {
  const { reset,decreaseCount } = useCounterActions();
  return (
    <div className="App">
      <Counter />
     
    </div>
  );
}

