import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeamSelect from './pages/home/TeamSelect'
import TeamPage from './pages/team/TeamPage'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TeamSelect />} />
          <Route path='/:teamName/:teamID' element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
