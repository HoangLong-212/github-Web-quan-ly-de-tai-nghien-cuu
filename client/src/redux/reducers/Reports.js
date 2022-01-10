import { INIT_STATE } from "../../constant";
import { createReports, getReports, getType, updateReports } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function ReportReducers(state = INIT_STATE.Reports, action) {
    switch (action.type) {
      case getType(getReports.getReportsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getReports.getReportsSuccess):
        
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getReports.getReportsFailure):
        return {
          ...state,
          isLoading: false,
        };
      case getType(createReports.createReportsSuccess):
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case getType(createReports.createReportsFailure):
        return {
          ...state,
          isLoading: true,
          data: [...state.data],
        };
        case getType(updateReports.updateReportsSuccess):    
     
      // messageSuccess("Chỉnh sửa thành công" );
      return {
        ...state,
        data: state.data.map((Reports) =>
        Reports._id === action.payload._id ? action.payload : Reports
        ),
      };
    case getType(updateReports.updateReportsFailure):
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
  
