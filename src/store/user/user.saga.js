import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPE } from "./user.types";
import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    singOut
} from "./user.actions";
import {
    getCurrentUser,
    addUserFromAuth,
    signInWithGooglePopup,
    signInWithEmailAndPasswordFromAuth,
    createUserByEmailAndPassword
} from "../../utilities/firebase/firebase.utils";

export function* getUserSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield addUserFromAuth(userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth)
            return;
        yield call(getUserSnapshotFromUserAuth, userAuth);
    } catch (error) {
        put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const userAuth = yield call(signInWithGooglePopup);
        console.log(userAuth);
        yield call(getUserSnapshotFromUserAuth, userAuth);
    } catch (error) {
        put(signInFailed(error));
    }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const userAuth = yield call(signInWithEmailAndPasswordFromAuth, email, password);
        console.log(userAuth);
        yield call(getUserSnapshotFromUserAuth, userAuth);
    }
    catch (error) {
        put(signInFailed(error));
    }
}

export function* singUpWithEmailAndPassword({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(createUserByEmailAndPassword, email, password);
        yield put(signUpSuccess(user, { displayName }));
    } catch (error) {
        yield put(signUpFailed(error))
    }
}

export function* singInAfterSignUp({ payload: { user, additionalDetails } }) {
    yield call(getUserSnapshotFromUserAuth, user, additionalDetails);
}

export function* signUserOut(){
    yield put(singOut());
}


export function* onSignUp() {
    yield takeLatest(USER_ACTION_TYPE.SING_UP_START, singUpWithEmailAndPassword)
}

export function* onSingUpSuccess() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, singInAfterSignUp)
}

export function* onSignInWithEmailAndPassword() {
    yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* onSignInWithGoogle() {
    yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START,signUserOut);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onSignInWithGoogle),
        call(onSignInWithEmailAndPassword),
        call(onSignUp),
        call(onSingUpSuccess),
        call(onSignOutStart)
    ]);
}