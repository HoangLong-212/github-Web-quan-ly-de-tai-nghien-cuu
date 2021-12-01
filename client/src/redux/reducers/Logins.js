import { messageError, messageSuccess } from "../../components/message";
import { INIT_STATE } from "../../constant";
import { getType, login } from "../actions";

export default function LoginsReducers(state = INIT_STATE.Logins, action) {
  switch (action.type) {
    case getType(login.loginRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(login.loginSuccess):
      messageSuccess("Đăng nhập thành công")
      return {
        ...state,
        isLoading: false,
        isAuthenticated:true,
        user: action.payload,
      };
    case getType(login.loginFailure):
      messageError(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
