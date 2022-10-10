import { languageOptions } from '../../constants/languageOptions';
import { GET_DISTRICTS_DATA, GET_GLOBAL_LANGUAGE } from '../actions';


const INIT_STATE = {
    districtData:[],
    globalLanguage:languageOptions[0]
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_DISTRICTS_DATA:
        return { ...state, districtData: action.payload};
    case GET_GLOBAL_LANGUAGE:
        return { ...state, globalLanguage: action.payload};
    default:
        return newState;
    }
};
