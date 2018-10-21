const SELECT_CABINET = 'SELECT_CABINET'


export default function cabinetSelector(state = { selectedCabinet: [] }, action) {
  switch (action.type) {
    case SELECT_CABINET:
      return { ...state, selectedCabinet: action.payload.cabinetId };
    default:
      return state;
  }
}
