import { generateDispatchObj } from "../../utilities/reducer/reducer.utils"
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categories) =>
    generateDispatchObj(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories); 