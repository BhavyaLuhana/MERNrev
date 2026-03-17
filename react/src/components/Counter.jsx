import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <p>You have Clicked {count} times</p>
      <button id='clickMe' onClick={() => { setCount(count => count + 1) }}>Click Me</button>
    </div>
  )
}

export default Counter
