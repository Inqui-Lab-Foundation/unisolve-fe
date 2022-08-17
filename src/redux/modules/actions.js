import axios from 'axios';

import {
    MODULES_LIST,
    MODULES_LIST_SUCCESS,
    MODULES_LIST_ERROR
} from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';

export const getModulesListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: MODULES_LIST_SUCCESS,
        payload: user
    });
};

export const getModulesListError = (message) => async (dispatch) => {
    dispatch({
        type: MODULES_LIST_ERROR,
        payload: { message }
    });
};

export const getModulesList = (history) => async (dispatch) => {
    try {
        dispatch({ type: MODULES_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getModules}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        console.log('=====', result);
        if (result && result.status === 200) {
            const data = result.data;
            dispatch(getModulesListSuccess(data));
            history.push('/courses');
        } else {
            dispatch(getModulesListError(result.statusText));
        }
    } catch (error) {
        dispatch(getModulesListError({}));
    }
};
