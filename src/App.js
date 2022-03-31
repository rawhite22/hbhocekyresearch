import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TeamSelectQuick from './components/TeamSelectQuick'

import TeamSelect from './pages/home/TeamSelect'
import PlayerPage from './pages/player/PlayerPage'
import TeamPage from './pages/team/TeamPage'
import GlobalStyles from './styles/GlobalStyles'
function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar toggle={setNavIsOpen} />
        {navIsOpen ? (
          <TeamSelectQuick isOpen={navIsOpen} toggle={setNavIsOpen} />
        ) : null}
        <Routes>
          <Route path='/' element={<TeamSelect />} />
          <Route path='/:teamID' element={<TeamPage />} />
          <Route path='/:teamID/:playerID' element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
