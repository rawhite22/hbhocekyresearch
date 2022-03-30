import styled from 'styled-components'

export const TeamSelectContainer = styled.main`
  display: grid;
  padding: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    flex-direction: column;
  }
`
export const DivisionContainer = styled.section``
export const TeamCardContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  background: white;
`
export const Logo = styled.div`
  img {
    width: 75%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
`
