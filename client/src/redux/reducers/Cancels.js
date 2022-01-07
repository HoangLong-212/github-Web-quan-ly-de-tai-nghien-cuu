import { INIT_STATE } from "../../constant";
import { createCancels, getCancels, getType, updateCancels } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function CancelReducers(state = INIT_STATE.Cancels, action) {
    switch (action.type) {
      case getType(getCancels.getCancelsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getCancels.getCancelsSuccess):
        
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getCancels.getCancelsFailure):
        return {
          ...state,
          isLoading: false,
        };
      case getType(createCancels.createCancelsSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case getType(createCancels.createCancelsFailure):
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
        case getType(updateCancels.updateCancelsSuccess):    
     
        // messageSuccess("Chỉnh sửa thành công" );
        return {
          ...state,
          data: state.data.map((Cancels) =>
          Cancels._id === action.payload._id ? action.payload : Cancels
          ),
        };
      case getType(updateCancels.updateCancelsFailure):
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
  
