import React from 'react'
import { StyledFilterContainer } from '../styles/TeamPage.styles'

const rosterFilter = ['All', 'Forward', 'Defenseman', 'Goalie']

const FilterContainer = ({ setFilter, filter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    // <StyledFilterContainer>
    //   {rosterFilter.map((selector) => (
    //     <p key={selector} onClick={() => setFilter(selector)}>
    //       {selector}
    //     </p>
    //   ))}
    // </StyledFilterContainer>
    <div>
      <label>Sort By:</label>
      <select value={filter} onChange={handleChange}>
        {rosterFilter.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterContainer
