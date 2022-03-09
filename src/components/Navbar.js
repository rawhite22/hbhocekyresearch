import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Anchor } from './styles'

const Navbar = () => {
  const location = useLocation()
  if (!location.state) {
    return <p>Hudson Boys Fantasy Hockey Research</p>
  } else if (location.state.team) {
    return <Anchor to='/'>Team Select</Anchor>
  } else if (location.state.teamId) {
    return (
      <Anchor
        state={{ team: location.state.teamId }}
        to={`/${location.state.teamId}`}>
        back to team
      </Anchor>
    )
  }
  {
    return
  }
}

export default Navbar
