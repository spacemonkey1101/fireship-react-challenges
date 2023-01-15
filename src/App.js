import { useState } from "react";

function App() {
  const [currCount, setCurrCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const clickHandler = () => {
    setCurrCount(currCount +1)
    if (currCount > 0 )
      setPrevCount(prevCount +1)
  };
  return (
    <>
      <h1>Current Count : {currCount}</h1>
      <h1>Previous Count : {prevCount}</h1>

      <button onClick={clickHandler}>Increase</button>
    </>
  );
}

export default App;
