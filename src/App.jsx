
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
function App() {

  const[counter,setCounter] = useState(0)

  const increaseCounter = () => {

    setCounter(counter+1)
  };
  const decreaseCounter = () => {

    setCounter(counter-1)
  };

  const setZero = () => {

    setCounter(0)
  };

 
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCounter}>decrease</button>
      <button onClick={setZero}>setZero</button>

  

    </div>
  );
}
export default App;
