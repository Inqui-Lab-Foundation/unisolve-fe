// Foulders Reducers //
import { TEACHER_DASHBOARD_STATES_SUCCESS } from '../../../redux/actions.js';

const INIT_STATE = {
    dashboardStates: ''
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case TEACHER_DASHBOARD_STATES_SUCCESS:
        return { ...state, dashboardStates: action.payload };
    default:
        return newState;
    }
};
