import { createSelector } from "reselect";

const getCategoriesSlice = (state) => state.categories;

export const getCategoriesArraySelector = createSelector(
    [getCategoriesSlice],
    (categories) => categories.categories,
);

export const getCategoriesMapSelector = createSelector(
    [getCategoriesArraySelector],
    (categories) =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, []));

export const getCategoriesFetchIsLoadingSelector = createSelector(
    [getCategoriesSlice],
    (slice) => slice.isLoading
);