import { INIT_STATE } from "../../constant";
import { createCouncils, getCouncils, getType, updateCouncils } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function CouncilReducers(state = INIT_STATE.Councils, action) {
    switch (action.type) {
      case getType(getCouncils.getCouncilsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getCouncils.getCouncilsSuccess):
        
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getCouncils.getCouncilsFailure):
        return {
          ...state,
          isLoading: false,
        };
      case getType(createCouncils.createCouncilsSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case getType(createCouncils.createCouncilsFailure):
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
        case getType(updateCouncils.updateCouncilsSuccess):    
     
        // messageSuccess("Chỉnh sửa thành công" );
        return {
          ...state,
          data: state.data.map((Cancels) =>
          Cancels._id === action.payload._id ? action.payload : Cancels
          ),
        };
      case getType(updateCouncils.updateCouncilsFailure):
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
  
