import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Nav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
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
    height: 4px;
    width: 75%;
    background: black;
    border-radius: 5px;
    margin: 15px 0;
  }
`
