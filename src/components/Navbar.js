import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styled from 'styled-components'
const Nav = styled.nav`
  height: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Navbar = () => {
  const { comparePlayers } = useSelector((state) => state)
  const location = useLocation()
  if (!location.state) {
    return (
      <Nav>
        <Link to='/'>HB Fantasy Hockey Research</Link>
        <Link to='/compare'>
          Compare {'( '}
          {comparePlayers.length}
          {' )'}
        </Link>
      </Nav>
    )
  } else if (location.state.team) {
    return (
      <Nav>
        <Link to='/'>
          <i className='fa-light fa-backward-step'></i> Team Select
        </Link>
        <Link to='/compare'>
          Compare {'( '}
          {comparePlayers.length}
          {' )'}
        </Link>
      </Nav>
    )
  } else if (location.state.teamId) {
    return (
      <Nav>
        <Link
          state={{ team: location.state.teamId }}
          to={`/${location.state.teamId}`}>
          back to team
        </Link>
        <Link to='/compare'>
          Compare {'( '}
          {comparePlayers.length}
          {' )'}
        </Link>
      </Nav>
    )
  }
}

export default Navbar

// const Navbar = () => {
//   const location = useLocation()
//   if (!location.state) {
//     return <Anchor to='/'>Hudson Boys Fantasy Hockey Research</Anchor>
//   } else if (location.state.team) {
//     return <Anchor to='/'>Team Select</Anchor>
//   } else if (location.state.teamId) {
//     return (
//       <Anchor
//         state={{ team: location.state.teamId }}
//         to={`/${location.state.teamId}`}>
//         back to team
//       </Anchor>
//     )
//   }
//   {
//     return
//   }
// }

// export default Navbar
