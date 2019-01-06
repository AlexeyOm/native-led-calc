import {combineReducers} from 'redux'
//import cabinetSelector from './cabinetSelector'


export const GET_REPOS = 'led-calc/repos/LOAD';
export const GET_REPOS_SUCCESS = 'led-calc/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'led-calc/repos/LOAD_FAIL';
export const SELECT_CABINET = 'led-calc/repos/SELECT_CABINET';
export const CHANGE_WIDTH = 'led-calc/CHANGE_WIDTH';
export const CHANGE_HEIGHT = 'led-calc/CHANGE_HEIGHT';

const defaultState = {
  repos: [],
  loading: false,
  selectedCabinet: 0,
  width: 0,
  height: 0,
}


export function reducerA(state = {
  repos: [],
  loading: false,
  selectedCabinet: 0,
  width: 1,
  height: 1,
}, action) {

  //console.log(state);
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      //console.log(action.payload.data[0]);
      let repos = action.payload.data.map( cabinet => { return {...cabinet, vendor: cabinet.vendor.brand}});
      repos.sort( (x,y) => x.vendor < y.vendor );
      return { ...state, loading: false, repos: repos };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    case SELECT_CABINET:
      return {...state, selectedCabinet: action.payload};

    case CHANGE_WIDTH:
      return {...state, width: (state.width + action.payload < 1) ? 1 : state.width + action.payload}; 

    case CHANGE_HEIGHT:
      return {...state, height: (state.height + action.payload < 1) ? 1 : state.height + action.payload};
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

export function changeWidth(amount){
  return {
    type: CHANGE_WIDTH,
    payload: amount,
  }
}

export function changeHeight(amount){
  return {
    type: CHANGE_HEIGHT,
    payload: amount,
  }
}




export const reducer = combineReducers({
  reducerA,
});

//export default reducer;
