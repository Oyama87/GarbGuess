// Initial State
const initialState = []

// Action constant
const GOT_GARMENTS = 'GOT_GARMENTS'

// Action creators
export const setGarments = (garments) => {
  return {
    type: GOT_GARMENTS,
    garments
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GOT_GARMENTS:
      return {garments: action.garments}
    default: return state
  }
}
