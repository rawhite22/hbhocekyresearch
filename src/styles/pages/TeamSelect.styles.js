import styled from 'styled-components'

export const TeamSelectContainer = styled.section`
  height: 95vh;
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  } ;
`
export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    height: 50px;
  }
  // media queries
  @media screen and (max-width: 600px) {
    .team-name-container {
      display: none;
    }
  }
`