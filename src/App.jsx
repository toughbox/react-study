import React, {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusCount}>1증가</button>
    </div>
  );
}

export default App;