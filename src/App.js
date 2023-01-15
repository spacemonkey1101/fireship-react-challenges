import { useState } from "react";

function App() {
  const [state, setState] = useState({ count: 5, user: "Eve" });

  const clickHandler = () => {
    setState({
      ...state,
      count : state.count + 1,
    });
    };
  return (
    <>
      <p>{state.count}</p>
      <button onClick={clickHandler}>Increase</button>
    </>
  );
}

export default App;
