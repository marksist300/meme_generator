import { useState } from 'react'
import Nav from './components/Nav'
import Meme from './components/Meme'
import normalize from 'normalize.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Nav />
      <Meme />
    </div>
  )
}

export default App
