import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeamSelect from './pages/home/TeamSelect'
import PlayerPage from './pages/player/PlayerPage'
import TeamPage from './pages/team/TeamPage'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
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
