import { message } from 'antd';
import { messageError, messageSuccess } from '../../components/message';
import { INIT_STATE } from '../../constant';
// import { getPosts, getType, createPost, updatePost } from '../actions';
import { createInfo, getInfo, getType, updateInfo } from '../actions';

export default function InfoReducers(state = INIT_STATE.Info, action) {
  switch (action.type) {
    case getType(getInfo.getInfoRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getInfo.getInfoSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,  
      };
    case getType(getInfo.getInfoFailure):
      return {
        ...state,
        isLoading: false,
      };

      case getType(createInfo.createInfoSuccess):
        messageSuccess("Thêm mới thành công");
        return {
          ...state,
          // isLoading: false,
          data: [...state.data, action.payload],
        };
      case getType(createInfo.createInfoFailure):
        messageError(action.payload);
        return {
          ...state,
          isLoading: false,
        };

    case getType(updateInfo.updateInfoSuccess):
      messageSuccess("Chỉnh sửa thành công");
      return {
        ...state,
        // isLoading: false,
        data: state.data.map((info) =>
          info._id === action.payload._id ? action.payload : info
        ),
      };
      case getType(updateInfo.updateInfoFailure):
        messageError(action.payload);
        return {
          ...state,
          isLoading: false,
        };
    default:
      return state;
  }
}