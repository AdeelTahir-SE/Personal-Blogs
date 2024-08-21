import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Guest/Home'
import Dashboard from '../Admin/Dashboard'
import Add from "../Admin/Add"
import Edit from '../Admin/Add'
import Article from '../Guest/Article'
function App() {
  const [count, setCount] = useState(0)
const router =createBrowserRouter([
  {path:"/Admin/Add",element:<Add/>},
  {path:"/Admin/Dashboard",element:<Dashboard/>},
  {path:`/Admin/Edit/${id}`,element:<Edit/>},
  {path:`/Article/${id}`,element:<Article/>},
  {path:"/",element:<Home/>},
])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
