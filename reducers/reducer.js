import axiosReducer from './axiosReducer';
//import cabinetSelector from './cabinetSelector';
import {combineReducers} from 'redux'

const reducer = combineReducers({
	axiosReducer,
});

export default reducer;