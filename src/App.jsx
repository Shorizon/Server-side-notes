import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar, SecureRoot } from './components'
import { Create, Forum, Home, PublicNote } from './pages'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='forum' element={<Forum />} />
          <Route path='create' element={<Create />} />
          <Route path='Public' element={<PublicNote />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
