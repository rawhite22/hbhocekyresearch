import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TeamInfo } from '../data'
import { Link } from 'react-router-dom'

const QuickContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: ${(props) => (props.isOpen ? '100' : '-1')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  .close-btn {
    align-self: center;
    justify-self: center;
  }
  .container {
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      gap: 0.2rem;
      img {
        height: 50px;
      }
    }
    position: relative;
    top: -300px;
    transform: ${(props) => (props.isOpen ? 'translateY(300px)' : null)};
    left: 0;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    justify-content: center;
    background-color: #edf2f7;
    z-index: 100;
    -webkit-box-shadow: 0px 7px 4px -1px rgba(0, 0, 0, 0.21);
    box-shadow: 0px 7px 4px -1px rgba(0, 0, 0, 0.21);
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
        <div className='close-btn' onClick={() => toggle(false)}>
          <i className='fa-solid fa-rectangle-xmark fa-2x'></i>
        </div>
      </div>
    </QuickContainer>
  )
}

export default TeamSelectQuick
