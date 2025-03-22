import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
    userData: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPE.SET_USER:
            return {
                ...state,
                userData: payload,
            }
        default:
            return state;
    }

}