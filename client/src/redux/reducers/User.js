import { message } from 'antd';
import { messageError, messageSuccess } from '../../components/message';
import { INIT_STATE } from '../../constant';
import { createUser, getUser, getType, updateUser } from '../actions';

export default function UserReducers(state = INIT_STATE.User, action) {
  switch (action.type) {
    case getType(getUser.getUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUser.getUserSuccess):
      // console.log("Success", action.payload);
      // messageSuccess("Lấy user thành công");
      return {
        ...state,
        isLoading: false,
        data: action.payload,  
      };
    case getType(getUser.getUserFailure):
      console.log("Fail", action.payload);
      messageError("Lấy user thất bại");
      return {
        ...state,
        isLoading: false,
      };

      case getType(createUser.createUserSuccess):
        messageSuccess("Thêm mới tài khoản thành công");
        return {
          ...state,
          isLoading: false,
          data: [...state.data, action.payload],
        };
      case getType(createUser.createUserFailure):
        messageError("Thêm tài khoản thất bại");
        return {
          ...state,
          isLoading: false,
        };
    case getType(updateUser.updateUserSuccess):
      // messageSuccess("Chỉnh sửa thành công");
      return {
        ...state,
        isLoading: false,
        data: state.data.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
      case getType(updateUser.updateUserFailure):
        messageError(action.payload);
        return {
          ...state,
          isLoading: false,
        };
    default:
      return state;
  }
}