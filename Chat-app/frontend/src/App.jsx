import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Usesrs from './views/Usesrs'
import Chats from './views/Chats'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Usesrs />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
