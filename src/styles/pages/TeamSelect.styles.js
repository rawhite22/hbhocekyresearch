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
  a {
    text-decoration: none;
    color: #f0f1ee;
    background-color: #171717;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.58);
    padding: 10px;
  }
  img {
    height: 120px;
  }
  // media queries
  @media screen and (max-width: 600px) {
    img {
      height: 60px;
    }
    .team-name-container {
      display: none;
    }
  }
`
