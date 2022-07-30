import { useState } from 'react'
import Nav from './components/Nav'
import Photo from './components/Photo'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Input />
      <Photo />
    </div>
  )
}

export default App
