import { languageOptions } from '../../constants/languageOptions';
import { GET_DISTRICTS_DATA, GET_GLOBAL_LANGUAGE } from '../actions';


const INIT_STATE = {
    districtData:[],
    overAllData :{},
    globalLanguage:languageOptions[0]
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_DISTRICTS_DATA:
        var data = action.payload && action.payload.length >0 && action.payload.filter((item) => item.district_name.toLowerCase() === 'all');
        return { ...state, districtData: action.payload,overAllData:data.length > 0 ? data[0] :{}};
    case GET_GLOBAL_LANGUAGE:
        return { ...state, globalLanguage: action.payload};
    default:
        return newState;
    }
};
