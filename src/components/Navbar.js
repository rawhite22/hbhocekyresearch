import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  if (!location.state) {
    return (
      <div style={{ height: '5vh' }}>
        <Link to='/'>Hudson Boys Fantasy Hockey Research</Link>
      </div>
    )
  } else if (location.state.team) {
    return (
      <div style={{ height: '5vh' }}>
        <Link to='/'>Team Select</Link>
      </div>
    )
  } else if (location.state.teamId) {
    return (
      <div style={{ height: '5vh' }}>
        <Link
          state={{ team: location.state.teamId }}
          to={`/${location.state.teamId}`}>
          back to team
        </Link>
      </div>
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
