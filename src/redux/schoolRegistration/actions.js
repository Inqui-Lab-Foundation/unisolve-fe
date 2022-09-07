import axios from 'axios';

import {
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST,
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS,
    SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR
} from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';

export const getSchoolRegistrationBulkuploadListSuccess =
    (user) => async (dispatch) => {
        dispatch({
            type: SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_SUCCESS,
            payload: user
        });
    };

export const getSchoolRegistrationBulkuploadListError =
    (message) => async (dispatch) => {
        dispatch({
            type: SCHOOL_REGISTRATOION_BULKUPLOAD_LIST_ERROR,
            payload: { message }
        });
    };

export const getSchoolRegistationBulkUploadList = () => async (dispatch) => {
    try {
        dispatch({ type: SCHOOL_REGISTRATOION_BULKUPLOAD_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(`${URL.getSchoolRegistrationBulkupload}`, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            dispatch(getSchoolRegistrationBulkuploadListSuccess(data));
        } else {
            dispatch(
                getSchoolRegistrationBulkuploadListError(result.statusText)
            );
        }
    } catch (error) {
        dispatch(getSchoolRegistrationBulkuploadListError({}));
    }
};
