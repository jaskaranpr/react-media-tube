import { useState } from 'react'
import './App.css'
import { Video } from './Components/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Video  />
    </div>
  )
}

export default App
