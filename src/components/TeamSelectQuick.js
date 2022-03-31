import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TeamInfo } from '../data'
import { Link } from 'react-router-dom'

const QuickContainer = styled.div`
  over-flow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${(props) => (props.isOpen ? '100' : '-1')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.5s ease;
  .container {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    height: 100%;
    background-color: #edf2f7;
    z-index: 100;
    img {
      height: 50px;
    }
  }
`
const TeamSelectQuick = ({ toggle, isOpen }) => {
  return (
    <QuickContainer isOpen={isOpen}>
      <div className='container'>
        {TeamInfo.map((team) => (
          <Link to={`/${team.id}`} onClick={() => toggle(false)}>
            {' '}
            <img src={team.logo} />
          </Link>
        ))}
      </div>
    </QuickContainer>
  )
}

export default TeamSelectQuick
