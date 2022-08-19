import axios from 'axios';

import {
    ADMIN_MENTORS_LIST,
    ADMIN_MENTORS_LIST_SUCCESS,
    ADMIN_MENTORS_LIST_ERROR
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getAdminMentorsListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_MENTORS_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminMentorsListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_MENTORS_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminMentorsList = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_MENTORS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getMentors}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            dispatch(getAdminMentorsListSuccess(data));
            // history.push("/teams");
        } else {
            dispatch(getAdminMentorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminMentorsListError({}));
    }
};
