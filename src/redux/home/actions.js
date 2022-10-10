import axios from 'axios';

import { GET_DISTRICTS_DATA, GET_GLOBAL_LANGUAGE } from '../actions';
import { URL, KEY } from '../../constants/defaultValues';
import {
    getNormalHeaders,
    openNotificationWithIcon
} from '../../helpers/Utils';

export const getDistrictsDataSuccess = (user) => async (dispatch) => {
    dispatch({
        type: GET_DISTRICTS_DATA,
        payload: user
    });
};
export const getGlobalLanguage =
    (language) => async (dispatch) => {
        dispatch({
            type: GET_GLOBAL_LANGUAGE ,
            payload: language
        });
    };

export const getDistrictData = () => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);

        const result = await axios
            .get(`${URL.getDistricts}`, axiosConfig)
            .then((data) => data)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const item = result.data.data[0].dataValues;
            dispatch(getDistrictsDataSuccess(item));
        } else {
            openNotificationWithIcon('error', 'Oops..! Something went wrong.');
        }
    } catch (error) {
        console.log(error);
    }
};

export const getDistrictLiveData = () => async (dispatch) => {
    try {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);

        const result = await axios
            .get(`${URL.getDistrictsLive}`, axiosConfig)
            .then((data) => data)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const item = result.data.data[0].dataValues;
            dispatch(getDistrictsDataSuccess(item));
        } else {
            openNotificationWithIcon('error', 'Oops..! Something went wrong.');
        }
    } catch (error) {
        console.log(error);
    }
};
