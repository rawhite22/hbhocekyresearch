import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TeamInfo } from '../data'

import { Nav } from './styles/Navbar.styles'

const Variants = {
  show: { translateX: '0px' },
  hide: { translateX: '-200px' },
}

const Navbar = ({ toggle, isOpen }) => {
  const handleToggle = () => {
    toggle(!isOpen)
  }
  const location = useLocation()

  return (
    <Nav variants={Variants} animate={isOpen ? 'show' : 'hide'}>
      <i
        onClick={handleToggle}
        className='fa-solid fa-arrow-left-from-line fa-2x'></i>
      <Link to='/' onClick={handleToggle}>
        <i className='fa-solid fa-house fa-2x'></i>
      </Link>
      {TeamInfo.map((team) => (
        <Link onClick={handleToggle} to={`/${team.id}`}>
          <img src={team.logo} />
        </Link>
      ))}
    </Nav>
  )
}

export default Navbar

// <TeamSelect>
//       {TeamInfo.map((team) => {
//         return <img src={team.logo} />
//       })}
//     </TeamSelect>
