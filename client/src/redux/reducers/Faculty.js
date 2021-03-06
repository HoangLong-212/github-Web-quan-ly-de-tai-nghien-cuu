import { message } from "antd";
import { messageError, messageSuccess } from "../../components/message";
import { INIT_STATE } from "../../constant";
import { createFaculty, getFaculty, getType, updateFaculty } from "../actions";

export default function FacultyReducers(state = INIT_STATE.Faculty, action) {
  switch (action.type) {
    case getType(getFaculty.getFacultyRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getFaculty.getFacultySuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getFaculty.getFacultyFailure):
      return {
        ...state,
        isLoading: false,
      };

    case getType(createFaculty.createFacultySuccess):
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(createFaculty.createFacultyFailure):
      messageError("Thêm tài khoản Khoa thất bại");
      return {
        ...state,
        isLoading: false,
      };
    case getType(updateFaculty.updateFacultySuccess):
      return {
        ...state,
        isLoading: false,
        data: state.data.map((faculty) =>
          faculty._id === action.payload._id ? action.payload : faculty
        ),
      };
    case getType(updateFaculty.updateFacultyFailure):
      messageError(action.payload);
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
