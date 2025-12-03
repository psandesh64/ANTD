import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Home from './pages/Home'

function App() {

  return (
    <>
    <div style={{display: 'flex', gap:10}}>
        <Link to="/">Home</Link>   
        <Link to="my-page">MyPage</Link>   
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="my-page" element={<MyPage/>} />
    </Routes>
    </>
  )
}

export default App
