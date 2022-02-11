import userActionTypes from "../users.actionTypes";
import userInitialStates from "./users.initialStates";

const userReducer = (state = userInitialStates, {type,payload}) => {
    switch(type){
        case userActionTypes.USERS_LOAD_START:
            return{
                ...state,
                isLoading:true,
                users:null,
                errorMessage:null
                
            }
        case userActionTypes.USERS_LOAD_SUCCESS:
            return{
                ...state,
                isLoading:false,
                users:payload,
            }
        case userActionTypes.USERS_LOAD_ERROR:
            return{
                    ...state,
                    isLoading:false,
                    users:payload,
           }
        default:
            return state;
    }
}

export default userReducer;
