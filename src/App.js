import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const typeHandler = (event) => {
    setValue(event.target.value);
    console.log(event.target);
  };

  return (
    <>
      <label htmlFor="name">Input:</label>
      <input
        type="text"
        id="name"
        name="name"
        size="25"
        value={value}
        placeholder="enter some text"
        onChange={typeHandler}
      />
    </>
  );
}

export default App;
