export const getTeamStats = (teamInfo) => (dispatch) => {
  return dispatch({ type: 'GET_TEAM_INFO', payload: teamInfo })
}
export const getRoster = (roster) => async (dispatch) => {
  return dispatch({ type: 'GET_ROSTER', payload: roster })
}
