import { useState } from "react";
import "./App.css";

function LoadingButton({ state, onClick, label }) {
  return (
    <button onClick={onClick} type="button">
      {state ? <div className="loader" /> : label}{" "}
    </button>
  );
}
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <LoadingButton
        state={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        label="Press"
      ></LoadingButton>
    </>
  );
}

export default App;
