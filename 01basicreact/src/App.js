import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    counter = counter + 1
    if (counter < 21) {
      setCounter(counter)
    }
    
  }

  const removeValue = () => {
    counter = counter -1
    if (counter >= 0) {
      setCounter(counter)
    }
  }
  return (
    <> 
    <h1>Hello Gaurav {counter}</h1>
    <button onClick={addValue}>Add value</button>

    <button onClick={removeValue}>Remove value</button>
    </>

  );
}

export default App;
