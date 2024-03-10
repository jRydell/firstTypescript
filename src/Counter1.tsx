import { useReducer, useRef } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADD_10: "add-10",
  HALVE: "halve",
  DOUBLE: "double",
  ADD_INPUT: "add input"
};


type State = { count: number }
type Action = { type: string; payload?: Number }

//store
const counterReducer = (state: State, action: Action) => {

  switch (action.type) {

    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0};
    case ACTION.ADD_10:
      return { count: state.count + Number(action.payload) };
    case ACTION.HALVE:
      return { count: state.count / 2 };
    case ACTION.DOUBLE:
      return { count: state.count * 2 };
    case ACTION.ADD_INPUT:
      return {count: state.count + Number(action.payload) };


      
    default:
      return state; //  raise error
  }
};


//state

const Counter1 = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
 



  return (
    <>
      <h1>Counter with useReducer</h1>
      <input type="number" placeholder="Enter a number" ref={inputRef} />
      <button onClick={() => inputRef.current && dispatch({ type: ACTION.ADD_INPUT, payload: Number(inputRef.current.value) })}>Add</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.ADD })}>Add</button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>Remove</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTION.ADD_10, payload: 10 })}>Add 10</button>
      <button onClick={() => dispatch({ type: ACTION.HALVE })}>Halve</button>
      <button onClick={() => dispatch({ type: ACTION.DOUBLE })}>Double</button>

    </>
  )
}

export default Counter1