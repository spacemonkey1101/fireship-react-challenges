import { useEffect, useState } from "react";

function App() {
  const [count] = useState(0);

  useEffect(() => {
    console.log("count updated")
    return () =>  console.log("destroyed!")
  },[count]);

}

export default App;
