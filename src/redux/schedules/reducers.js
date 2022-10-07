import {
    GET_SCHEDULES,
} from '../actions';


const INIT_STATE = {
    schedules:[]
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_SCHEDULES:
        return { schedules:action.payload };
    default:
        return newState;
    }
};
