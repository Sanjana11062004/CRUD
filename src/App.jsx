import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetcher from './components/Fetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fetcher></Fetcher>
  );
}

export default App
