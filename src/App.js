import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import Compare from './pages/compare/Compare'
import TeamSelect from './pages/home/TeamSelect'
import PlayerPage from './pages/player/PlayerPage'
import TeamPage from './pages/team/TeamPage'
import GlobalStyles from './styles/GlobalStyles'
function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<TeamSelect />} />
          <Route path='/compare' element={<Compare />} />
          <Route path='/:teamID' element={<TeamPage />} />
          <Route path='/:teamID/:playerID' element={<PlayerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
