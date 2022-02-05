import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const handleIncrement = () => {
    if(showErrorMsg) setShowErrorMsg(!showErrorMsg);

    setCount(count + 1);
  }  

  const handleDecrement = () => {
    if (count === 0) {
      return setShowErrorMsg(!showErrorMsg);
    }

    setCount(count - 1);
  }

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The Counter is currently 
        &nbsp;<span data-test="count">{count}</span>
      </h1>

      {
        showErrorMsg ? 
        <h2
          data-test="counter-error-message" 
          style={{color: 'red'}}>the counter can't go below zero</h2> :
        ''
      }
      
      <button
        onClick={handleIncrement} 
        data-test="increment-button">Increment counter
      </button>

      <button
        onClick={handleDecrement} 
        data-test="decrement-button">decrement counter
      </button>

    </div>
  );
}

export default App;
