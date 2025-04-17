import { createSelector } from "reselect";

const getUserSlice = (state) => state.user;

export const getCurrentUserSelector = createSelector(
    [getUserSlice],
    (user) => user.userData);

export const getErrorSelector = createSelector(
    [getUserSlice],
    (user) => user.error
);

