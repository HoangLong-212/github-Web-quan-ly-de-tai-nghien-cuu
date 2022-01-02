import { INIT_STATE } from "../../constant";
import { getType, hideUpdateUserModal, showUpdateUserModal } from "../actions";

export default function UserReducers(
  state = INIT_STATE.UpdateUserModal,
  action
) {
  switch (action.type) {
    case getType(showUpdateUserModal):
      return {
        isShow: true,
      };
    case getType(hideUpdateUserModal):
      return {
        isShow: false,
      };
    default:
      return state;
  } 
}
