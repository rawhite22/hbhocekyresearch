import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Nav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(107, 107, 107, 0.54);
  -moz-box-shadow: 3px 3px 5px 0px rgba(107, 107, 107, 0.54);
  box-shadow: 3px 3px 5px 0px rgba(107, 107, 107, 0.54);
  padding: 1rem;
  img {
    height: 50px;
    padding: 0.2rem;
  }
  i {
    padding: 0.2rem;
  }
  z-index: 10;
  background-color: #edf2f7;
  .seperator {
    height: 2px;
    width: 50%;
    background: black;
    border-radius: 5px;
  }
  .team-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    width: 100%;
    height: 80%;
  }
  @media (max-width: 468px) {
    width: 100%;
    .team-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      width: 100%;
      height: 80%;
    }
    i {
      padding: 0.2rem;
      font-size: 1.5rem;
    }
  }
`
