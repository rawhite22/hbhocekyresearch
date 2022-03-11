const initialState = []

const comparePlayers = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD':
      return [...state, payload]
    case 'REMOVE':
      return payload
    default:
      return [...state]
  }
}

export default comparePlayers
