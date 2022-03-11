import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Anchor } from './styles'

const Navbar = () => {
  const location = useLocation()
  if (!location.state) {
    return (
      <div style={{ height: '5vh' }}>
        <Anchor to='/'>Hudson Boys Fantasy Hockey Research</Anchor>
      </div>
    )
  } else if (location.state.team) {
    return (
      <div style={{ height: '5vh' }}>
        <Anchor to='/'>Team Select</Anchor>
      </div>
    )
  } else if (location.state.teamId) {
    return (
      <div style={{ height: '5vh' }}>
        <Anchor
          state={{ team: location.state.teamId }}
          to={`/${location.state.teamId}`}>
          back to team
        </Anchor>
      </div>
    )
  }
  {
    return
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
