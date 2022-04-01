const initialState = {
  loading: true,
  teamInfo: null,
  roster: null,
  standings: null,
}

const teamStats = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_TEAM_INFO':
      return { ...state, teamInfo: payload }
    case 'GET_STANDINGS':
      return { ...state, standings: payload }
    case 'GET_ROSTER':
      return { ...state, roster: payload }
    case 'SET_LOADING_FALSE_TI':
      return { ...state, loading: false }
    default:
      return { ...state }
  }
}

export default teamStats
