import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Home from './pages/Home'
import AppConfigProvider from './AppConfigProvider'
import {ThemeContext} from './context/themeContext'
import { useState } from 'react'

function App() {
  const [isDarkMode,setIsDarkMode] = useState(false)

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode,setIsDarkMode }}>
        <AppConfigProvider isDarkMode={ isDarkMode }>
          <div style={{display: 'flex', gap:10}}>
              <Link to="/">Home</Link>   
              <Link to="my-page">MyPage</Link>   
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="my-page" element={<MyPage/>} />
          </Routes>
        </AppConfigProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
