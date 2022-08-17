import { GET_SAMPLE_LIST_DATA } from '../actions';

const INIT_STATE = {
    sampleList: []
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_SAMPLE_LIST_DATA:
        console.log('================', newState.sampleList);
        // newState.bannerData = action.data.statusResult;
        break;
    default:
        return newState;
    }
};
