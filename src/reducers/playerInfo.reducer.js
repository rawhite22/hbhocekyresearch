const initialState = {
  loading: true,
  playerInfo: null,
}

const playerInfo = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PLAYER_INFO':
      return { ...state, playerInfo: { ...state.playerInfo, info: payload } }
    case 'GET_PLAYER_RANKINGS':
      return {
        ...state,
        playerInfo: { ...state.playerInfo, rankings: payload },
      }
    case 'GET_PLAYER_LAST_TEN':
      return {
        ...state,
        playerInfo: { ...state.playerInfo, lastTen: payload },
      }
    case 'SET_LOADING_FALSE_PI':
      return { ...state, loading: false }
    case 'SET_LOADING_TRUE_PI':
      return { ...state, loading: true }
    default:
      return { ...state }
  }
}

export default playerInfo
