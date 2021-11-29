import { INIT_STATE } from "../../constant";
import { getType, getUsers } from "../actions";

export default function UsersReducers(state = INIT_STATE.Users, action) {
  switch (action.type) {
    case getType(getUsers.getUsersRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUsers.getUsersSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getUsers.getUsersFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
