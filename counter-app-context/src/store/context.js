import React, { useReducer, useContext, createContext } from "react";

const CounterStateContext = createContext();
const CounterDispatchContext = createContext();
const initialState = {
  counter: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "RESET":
      return { ...state, counter: state.counter + 10 };
    case "DECREASE_COUNT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const reset = () => dispatch({ type: "RESET" });
  const decreaseCount = () => dispatch({ type: "DECREASE_COUNT" });

  const actions = { reset, decreaseCount };

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={actions}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useCounterState() {
  const context = useContext(CounterStateContext);
  if (context === undefined)
    throw Error('"useErrorState" should be used under "ErrorProvider"!');

  return context;
}

function useCounterActions() {
  const context = useContext(CounterDispatchContext);
  if (context === undefined)
    throw Error(
      '"useErrorActions" should be used under "ErrorDispatchContext"!'
    );

  return context;
}

export { CounterProvider, useCounterState, useCounterActions };
