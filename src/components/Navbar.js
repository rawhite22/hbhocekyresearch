import React from 'react'
import { TeamInfo } from '../data'
import { Link } from 'react-router-dom'
import { Nav } from './styles/Navbar.styles'

const Navbar = () => {
  return (
    <Nav>
      <Link to='/'>Team Select</Link>
    </Nav>
  )
}

export default Navbar
