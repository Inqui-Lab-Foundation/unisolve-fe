import { GET_DISTRICTS_DATA } from '../actions';

const INIT_STATE = {
    districtData:[]
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_DISTRICTS_DATA:
        return { ...state, districtData: action.payload};
    default:
        return newState;
    }
};
