import axios from 'axios';

import {
    ADMIN_TEAMS_LIST,
    ADMIN_TEAMS_LIST_SUCCESS,
    ADMIN_TEAMS_LIST_ERROR,
    ADMIN_TEAMS_MEMBERS_LIST,
    ADMIN_TEAMS_MEMBERS_LIST_SUCCESS,
    ADMIN_TEAMS_MEMBERS_LIST_ERROR
} from '../../../redux/actions.js';
import { URL, KEY } from '../../../constants/defaultValues.js';
import { getNormalHeaders } from '../../../helpers/Utils.js';

export const getAdminTeamsListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_TEAMS_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminTeamsListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_TEAMS_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminTeamsList = (item) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_TEAMS_LIST });
        let axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axiosConfig['params'] = {
            mentor_id: item,
            status: 'ACTIVE'
        };
        const result = await axios
            .get(URL.getTeamsList, axiosConfig)
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data =
                result.data &&
                result.data.data[0] &&
                result.data.data[0].dataValues;
            dispatch(getAdminTeamsListSuccess(data));
            // history.push("/teams");
        } else {
            dispatch(getAdminTeamsListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminTeamsListError({}));
    }
};

export const getAdminTeamMembersListSuccess = (user) => async (dispatch) => {
    dispatch({
        type: ADMIN_TEAMS_MEMBERS_LIST_SUCCESS,
        payload: user
    });
};

export const getAdminTeamMembersListError = (message) => async (dispatch) => {
    dispatch({
        type: ADMIN_TEAMS_MEMBERS_LIST_ERROR,
        payload: { message }
    });
};

export const getAdminTeamMembersList = (teamId) => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_TEAMS_MEMBERS_LIST });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const result = await axios
            .get(
                `${
                    URL.getTeamMembersList +
                    teamId +
                    '/members' +
                    '?status=ACTIVE'
                }`,
                axiosConfig
            )
            .then((user) => user)
            .catch((err) => {
                return err.response;
            });
        if (result && result.status === 200) {
            const data = result.data && result.data.data;
            dispatch(getAdminTeamMembersListSuccess(data));
            // history.push("/teams");
        } else {
            dispatch(getAdminTeamMembersListError(result.statusText));
        }
    } catch (error) {
        dispatch(getAdminTeamMembersListError({}));
    }
};
