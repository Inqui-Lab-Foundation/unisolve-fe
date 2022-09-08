import axios from 'axios';

import {
    ADMIN_MENTORS_LIST,
    ADMIN_MENTORS_LIST_SUCCESS,
    ADMIN_MENTORS_LIST_ERROR,
    ADMIN_MENTORS_STATUS_UPDATE,
    // ADMIN_MENTORS_PAGE_NUMBER,
    ADMIN_MENTORS_PAGE_SIZE
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getAdminMentorsListSuccess = (user,totalItems) => async (dispatch) => {
    dispatch({
        type: ADMIN_MENTORS_LIST_SUCCESS,
        payload: {user,totalItems}
    });
};

export const getAdminMentorsListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_MENTORS_LIST_ERROR,
        payload: { message }
    });
};
// export const updatePageNumber = (number) => async (dispatch) => {
//     dispatch({
//         type: ADMIN_MENTORS_PAGE_NUMBER,
//         payload: number
//     });
// };
export const updatePageSize = (number) => async (dispatch) => {
    dispatch({
        type: ADMIN_MENTORS_PAGE_SIZE,
        payload: number
    });
};

export const getAdminMentorsList = (status) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_MENTORS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const mentorStatus = status ? status : "";
        const result = await axios
            .get(`${URL.getMentors}?status=${mentorStatus}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            const totalData = result.data &&
            result.data.data[0] &&
            result.data.data[0].totalItems;
            dispatch(getAdminMentorsListSuccess(data,totalData));
        } else {
            dispatch(getAdminMentorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminMentorsListError({}));
    }
};
export const updateMentorStatus = (data,id) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_MENTORS_STATUS_UPDATE });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .put(`${URL.updateMentorStatus + id}`, data, axiosConfig)
            .then((user) => console.log(user))
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            dispatch(getAdminMentorsListSuccess(data));
        } else {
            dispatch(getAdminMentorsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminMentorsListError({}));
    }
};
