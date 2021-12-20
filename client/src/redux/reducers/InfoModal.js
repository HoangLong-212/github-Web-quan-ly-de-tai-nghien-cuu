import { INIT_STATE } from "../../constant";
import { getType, hideInfoModal, showInfoModal } from "../actions";

export default function InfoReducers(
  state = INIT_STATE.InfoModal,
  action
) {
  switch (action.type) {
    case getType(showInfoModal):
      return {
        isShow: true,
      };
    case getType(hideInfoModal):
      return {
        isShow: false,
      };
    default:
      return state;
  } 
}
