import { INIT_STATE } from "../../constant";
import { getType, getExtends, createExtends, updateExtends } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function ExtendsReducers(state = INIT_STATE.Extends, action) {
    switch (action.type) {
      case getType(getExtends.getExtendsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getExtends.getExtendsSuccess):
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getExtends.getExtendsFailure):
        return {
          ...state,
          isLoading: false,
        };
      case getType(createExtends.createExtendsSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case getType(createExtends.createExtendsFailure):
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
        case getType(updateExtends.updateExtendsSuccess):    
     
        // messageSuccess("Chỉnh sửa thành công" );
        return {
          ...state,
          data: state.data.map((Extends) =>
          Extends._id === action.payload._id ? action.payload : Extends
          ),
        };
      case getType(updateExtends.updateExtendsFailure):
        // messageError(action.payload);
        
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
      default:
        return state;
    }
  }
  
