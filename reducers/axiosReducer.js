import {combineReducers} from 'redux'
//import cabinetSelector from './cabinetSelector'


export const GET_REPOS = 'led-calc/repos/LOAD';
export const GET_REPOS_SUCCESS = 'led-calc/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'led-calc/repos/LOAD_FAIL';
export const SELECT_CABINET = 'led-calc/repos/SELECT_CABINET'

export function reducerA(state = { repos: [], loading: false, selectedCabinet: 0}, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      //console.log(action.payload.data[0]);
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case SELECT_CABINET:
      return {...state, selectedCabinet: action.payload}
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/data/?format=json`
      }
    }
  };
}


export function selectCabinet(cabinetID) {
  return {
    type: SELECT_CABINET,
    payload: cabinetID
  }
}




export const reducer = combineReducers({
  reducerA,
});

//export default reducer;
