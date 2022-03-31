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
  -webkit-box-shadow: 9px -1px 7px -6px #000000;
  box-shadow: 9px -1px 7px -6px #000000;
  padding: 1rem;
  img {
    height: 50px;
    padding: 0.2rem;
  }
  z-index: 10;
  background-color: #edf2f7;
`
