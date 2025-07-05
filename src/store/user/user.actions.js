import { USER_ACTION_TYPE } from "./user.types";
import { generateDispatchObj } from "../../utilities/reducer/reducer.utils";

export const setCurrentUser = (user) =>
    generateDispatchObj(USER_ACTION_TYPE.SET_USER, user);

export const checkUserSession = () => generateDispatchObj(USER_ACTION_TYPE.CHECK_USER_SESSION);

export const googleSignInStart = () => generateDispatchObj(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email,password) => generateDispatchObj(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,{email,password});

export const signInSuccess = (user) => generateDispatchObj(USER_ACTION_TYPE.SING_IN_SUCCESS, user);

export const signInFailed = (error) => generateDispatchObj(USER_ACTION_TYPE.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => generateDispatchObj(USER_ACTION_TYPE.SING_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) => generateDispatchObj(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) => generateDispatchObj(USER_ACTION_TYPE.SIGN_UP_FAILED, error);

export const singOutUser = () => generateDispatchObj(USER_ACTION_TYPE.SIGN_OUT_SUCCESS);

export const singOutStart = () => generateDispatchObj(USER_ACTION_TYPE.SIGN_OUT_START);

export const singOutFailed = (error) => generateDispatchObj(USER_ACTION_TYPE.SIGN_OUT_FAILED, error);