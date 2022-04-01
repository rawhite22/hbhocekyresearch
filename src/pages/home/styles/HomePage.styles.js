import styled from 'styled-components'

export const TeamSelectContainer = styled.main`
  display: grid;
  padding: 2rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  overflow: ${(props) => (props.isOpen ? 'hidden' : 'auto')};
  height: ${(props) => (props.isOpen ? '100vh' : 'auto')};

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media (max-width: 468px) {
    grid-template-columns: minmax(150px, 1fr);
  }
  h2 {
    margin-bottom: 1rem;
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
  position: relative;
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
  i {
    position: absolute;
    top: -2rem;
    left: -2rem;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.07);
    border-radius: 50%;
    padding: 1rem;
  }
  .hot {
    color: white;
    background: #ff3d3d;
  }
  .cold {
    color: white;
    background: rgb(5, 197, 255);
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }
  }
  a {
    background: #0084ffd5;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    color: white;
    margin: 1rem 0 1rem 0;
  }
`
export const RecordContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > p {
    font-size: 1.4rem;
    font-weight: bolder;
  }
  .records {
    display: flex;
    justify-content: space-between;
    width: 70px;
    p {
      font-size: 1.2rem;
      font-weight: bolder;
    }
  }
`
