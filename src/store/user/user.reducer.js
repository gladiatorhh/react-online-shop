import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
    userData: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPE.SING_IN_SUCCESS:
            return {
                ...state,
                userData: payload,
            }
        case USER_ACTION_TYPE.SIGN_OUT:
            return {
                ...state,
                userData: null,
            }
        case USER_ACTION_TYPE.SIGN_IN_FAILED:
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }

}