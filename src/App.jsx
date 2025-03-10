import { BrowserRouter as Router, Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Characters from './pages/Characters'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

function Layaut() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App