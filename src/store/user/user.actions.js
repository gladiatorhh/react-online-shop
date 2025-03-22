import { USER_ACTION_TYPE } from "./user.types";
import { generateDispatchObj } from "../../utilities/reducer/reducer.utils";

export const setCurrentUser = (user) =>
    generateDispatchObj(USER_ACTION_TYPE.SET_USER, user);