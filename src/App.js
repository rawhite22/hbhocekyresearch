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
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <i
          className='fa-solid fa-arrow-right-from-line fa-2x'
          onClick={() => setNavIsOpen(!navIsOpen)}
          style={{ paddingLeft: '2rem', paddingTop: '1rem' }}></i>

        <div className='App'>
          <Navbar isOpen={navIsOpen} toggle={setNavIsOpen} />
          <Routes>
            <Route path='/' element={<TeamSelect isOpen={navIsOpen} />} />
            <Route path='/:teamID' element={<TeamPage />} />
            <Route path='/:teamID/:playerID' element={<PlayerPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
