import userActionTypes from "../users.actionTypes";

const usersLoadStart =() => ({
    type:userActionTypes.USERS_LOAD_START,
});

const usersLoadSuccess =(users) => ({
    type:userActionTypes.USERS_LOAD_SUCCESS,
    payload:users,
});
const usersLoadError =(errorMessage) => ({
    type:userActionTypes.USERS_LOAD_ERROR,
    payload:errorMessage,
});
export default {
    usersLoadStart,
    usersLoadSuccess,
    usersLoadError
}