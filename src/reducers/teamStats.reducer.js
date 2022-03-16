const initiaiState = {
  loading: true,
  teamInfo: null,
  roster: null,
}

const teamStats = (state = initiaiState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_TEAM_INFO':
      return { ...initiaiState, teamInfo: payload }
    case 'GET_ROSTER':
      return { ...state, roster: payload }
    case 'SET_LOADING_FALSE':
      return { ...state, loading: false }
    default:
      return { ...state }
  }
}

export default teamStats
