import React from 'react'
import { Link } from 'react-router-dom'
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
  const { teamInfo } = useSelector((state) => state.teamStats)

  return (
    <Header>
      <Link to='/'>Team Select</Link>
      <nav>
        {playerInfo && (
          <Link to={`/${playerInfo.info.currentTeam.id}`}>
            Current Selected Team: {teamInfo.name}
          </Link>
        )}
      </nav>
    </Header>
  )
}

export default Navbar
