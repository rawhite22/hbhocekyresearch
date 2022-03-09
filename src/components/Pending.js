import React from 'react'

const Pending = ({ children, isPending }) => {
  return <div>{isPending ? <p>Loading</p> : children}</div>
}

export default Pending
