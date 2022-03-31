import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Nav } from './styles/Navbar.styles'

const Navbar = ({ toggle }) => {
  const handleToggle = () => {
    toggle(true)
  }
  const location = useLocation()
  console.log(location)

  return (
    <Nav>
      {location.pathname === '/' ? null : (
        <Link to='/'>
          <i className='fa-solid fa-house'></i>
        </Link>
      )}

      <i onClick={handleToggle} className='fa-solid fa-bars'></i>
    </Nav>
  )
}

export default Navbar

// <TeamSelect>
//       {TeamInfo.map((team) => {
//         return <img src={team.logo} />
//       })}
//     </TeamSelect>
