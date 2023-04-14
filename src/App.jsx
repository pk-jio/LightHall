import React from "react";
import './App.css';

function App() {
  const getCount = JSON.parse(localStorage.getItem('count'))
  const [count, setCount] = React.useState(getCount || 0);

  function handleClick() {
    setCount(count+1)
    localStorage.setItem('count', count+1)
    console.log(location)
    fetch('http://localhost:3000/count', {
      method: 'post',
      body: JSON.stringify({location})
    })
  }

  function handleClear() {
    setCount(0)
    localStorage.setItem('count', 0)
  }

  return <div className="container">
      <p className="count">{count}</p>
      {/* <button onClick={handleClear}>clear</button> */}
      <button onClick={handleClick}>count</button>
      <p>click count to increase the click count</p>
    </div>
}

export default App