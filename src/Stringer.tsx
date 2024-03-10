import { useReducer, useRef } from "react";

const ACTION = {
  ADD_R: "add-R",
  ADD_XYZ: "add-XYZ",
  ADD_INPUT: "add-input",
  RESET: "reset",
  REMOVE_LAST: "remove-last"
};

type State = { string: string };
type Action = { type: string; payload?: string };

const stringerReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD_R:
      return { string: state.string + "R" };
    case ACTION.ADD_XYZ:
      return { string: state.string + "XYZ" };
    case ACTION.RESET:
      return { string: "Stringer" };
    case ACTION.ADD_INPUT:
      return { string: state.string + action.payload };
    case ACTION.REMOVE_LAST:
        return { string: state.string.slice(0, -1) };  

    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(stringerReducer, { string: "Stringer" });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <p>{state.string}</p>
      <input type="text" placeholder="Enter a letter" ref={inputRef} maxLength={1}  pattern={"[A-Za-z]"}/>
      <button
        onClick={() =>
          inputRef.current &&
          dispatch({ type: ACTION.ADD_INPUT, payload: inputRef.current.value })
        }
      >
        Add
      </button>
      <br />
      <button onClick={() => dispatch({ type: ACTION.ADD_R })}>Add R</button>
      <button onClick={() => dispatch({ type: ACTION.ADD_XYZ })}>Add XYZ</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE_LAST })}>Remove last letter</button>
    </>
  );
};

export default Stringer;
