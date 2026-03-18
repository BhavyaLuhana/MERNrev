import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import Props from './components/Props';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
  }
  return (
    <div>
      {/* <UserCard name='radha' desc='I am Radha, i am the queen of the world'/>
      <UserCard name='krishna' desc='I am krishna, i am the king of the world'/> */}


      {/* <Counter /> */}

      <Props count={count} onButtonClick={handleClick} />
      <h1>{count}</h1>
      
    </div>
  )
}

export default App
