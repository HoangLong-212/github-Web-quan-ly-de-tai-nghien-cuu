import { INIT_STATE } from "../../constant";
import { getType, hideFacultyModal, showFacultyModal } from "../actions";

export default function FacultyReducers(
  state = INIT_STATE.FacultyModal,
  action
) {
  switch (action.type) {
    case getType(showFacultyModal):
      return {
        isShow: true,
      };
    case getType(hideFacultyModal):
      return {
        isShow: false,
      };
    default:
      return state;
  } 
}
