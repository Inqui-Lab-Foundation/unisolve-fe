import axios from 'axios';

import {
    ADMIN_EVALUTORS_LIST,
    ADMIN_EVALUTORS_LIST_SUCCESS,
    ADMIN_EVALUTORS_LIST_ERROR
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getAdminEvalutorsListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_EVALUTORS_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminEvalutorsListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_EVALUTORS_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminEvalutorsList = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_EVALUTORS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getAdminEvaluator}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getAdminEvalutorsListSuccess(data));
            // history.push("/teams");
        } else {
            dispatch(getAdminEvalutorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminEvalutorsListError({}));
    }
};
