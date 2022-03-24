import { lastTenFunc } from '../functions/PlayerDataCompilers'

export const getPlayerInfo = (playerInfo) => (dispatch) => {
  return dispatch({ type: 'GET_PLAYER_INFO', payload: playerInfo })
}
export const getPlayerRanks = (playerInfo) => (dispatch) => {
  return dispatch({ type: 'GET_PLAYER_RANKINGS', payload: playerInfo })
}

export const getPlayerLastTen = (playerInfo) => (dispatch) => {
  const payload = lastTenFunc(playerInfo)
  return dispatch({ type: 'GET_PLAYER_LAST_TEN', payload: playerInfo })
}
