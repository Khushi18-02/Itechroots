import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-[50px]">
      Hello World  
      <br />
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Increase
      </button>
    </div>
  )
}

export default App
