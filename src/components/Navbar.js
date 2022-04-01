import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { TeamInfo } from '../data'

import { Nav } from './styles/Navbar.styles'

const Variants = {
  show: { translateX: '0px', transition: { duration: 0.3 } },
  hide: { translateX: '-200px' },
  exit: { translateX: '-200px', transition: { duration: 0.3 } },
}

const Navbar = ({ toggle, isOpen }) => {
  const handleToggle = () => {
    toggle(!isOpen)
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const location = useLocation()

  return (
    <Nav
      key='side-nav'
      variants={Variants}
      initial='hide'
      animate='show'
      exit='exit'>
      <i
        onClick={handleToggle}
        className='fa-solid fa-arrow-left-from-line fa-2x'></i>
      <div className='seperator'></div>
      <Link to='/' onClick={handleToggle}>
        <i className='fa-solid fa-house fa-2x'></i>
      </Link>
      <div className='seperator'></div>
      <div className='team-container'>
        {TeamInfo.map((team) => {
          if (location.pathname.split('/')[1] === team.id.toString()) {
            return (
              <Link key={team.id} onClick={handleToggle} to={`/${team.id}`}>
                <img src={team.logo} alt='logo' />
              </Link>
            )
          }
          return (
            <Link key={team.id} onClick={handleToggle} to={`/${team.id}`}>
              <img src={team.logo} alt='logo' />
            </Link>
          )
        })}
      </div>
    </Nav>
  )
}

export default Navbar
