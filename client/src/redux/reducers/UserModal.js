import { INIT_STATE } from "../../constant";
import { getType, hideUserModal, showUserModal } from "../actions";

export default function UserReducers(
  state = INIT_STATE.UserModal,
  action
) {
  switch (action.type) {
    case getType(showUserModal):
      return {
        isShow: true,
      };
    case getType(hideUserModal):
      return {
        isShow: false,
      };
    default:
      return state;
  } 
}
