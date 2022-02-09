import usersService from "../../../services/users.service";
import usersActions from "./users.actions";

export const loadUsersAsync = () => (dispatch) => {
    dispatch(usersActions.usersLoadStart());

    usersService.getAllUsers()
    .then((response) => dispatch(usersActions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(usersActions.usersLoadError(error.message)));

}