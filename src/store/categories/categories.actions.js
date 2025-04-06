import { generateDispatchObj } from "../../utilities/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { getCategoriesAndDocuments } from "../../utilities/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
    generateDispatchObj(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
    generateDispatchObj(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesError = (error) =>
    generateDispatchObj(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categories = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
        dispatch(fetchCategoriesError(error));
    }
}