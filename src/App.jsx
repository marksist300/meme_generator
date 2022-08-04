import { useState } from 'react'
import Nav from './components/Nav'
import Meme from './components/Meme'
import normalize from 'normalize.css'
function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode () {
    setDarkMode(prev=> !prev)
  }


  return (
    <div className={darkMode? 'darkMode' : 'lightMode'}>
      <Nav 
      toggleDarkMode={toggleDarkMode}
      darkModeActive={darkMode}
      />
      <Meme />
    </div>
  )
}

export default App
