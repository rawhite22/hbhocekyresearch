export const playerSelect = (playerInfo, currentList) => (dispatch) => {
  const filteredList = currentList.filter((item) => {
    if (item.id === playerInfo.id) {
      return true
    } else {
      return false
    }
  })

  if (currentList.length === 0) {
    return dispatch({ type: 'ADD', payload: playerInfo })
  }
  if (filteredList.length !== 0) {
    const c = currentList.filter((items) => {
      return items.id !== playerInfo.id
    })
    return dispatch({ type: 'REMOVE', payload: c })
  }
  if (filteredList.length === 0) {
    return dispatch({ type: 'ADD', payload: playerInfo })
  }
}
