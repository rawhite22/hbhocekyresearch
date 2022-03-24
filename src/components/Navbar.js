import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  nav {
  }
`

const Navbar = () => {
  const { playerInfo } = useSelector((state) => state.playerInfo)

  return (
    <Header>
      <Link to='/'>Hudson Boys</Link>
      <nav>
        {playerInfo && (
          <Link to={`/${playerInfo.info.currentTeam.id}`}>
            Current Selected Team: {playerInfo.info.currentTeam.name}
          </Link>
        )}
      </nav>
    </Header>
  )
}

export default Navbar
