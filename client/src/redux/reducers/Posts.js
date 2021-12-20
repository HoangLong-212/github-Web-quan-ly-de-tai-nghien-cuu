import { INIT_STATE } from "../../constant";
import { createPosts, deletePosts, getPosts, getType, updatePosts } from "../actions";
import { messageError, messageSuccess } from "../../components/message";

export default function PostsReducers(state = INIT_STATE.Posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return{
          ...state,
          isLoading: true,
      }
      case getType(getPosts.getPostsSuccess):
      return{
          ...state,
          isLoading: false,
          data: action.payload,
      }
      case getType(getPosts.getPostsFailure):
      return{
          ...state,
          isLoading: false,
      }
      case getType(createPosts.createPostsSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
      case getType(deletePosts.deletePostsSuccess):
        
      messageSuccess("Xóa thành công");
      return {
        ...state,
        data: state.data.filter(
          (Posts) => Posts._id !== action.payload
        ),
      };
    case getType(deletePosts.deletePostsFailure):
      
      messageError(action.payload);
      return {
        ...state,
        isLoading: true,
        data: [...state.data],
      };
      case getType(updatePosts.updatePostsSuccess):    
      messageSuccess("Chỉnh sửa thành công");
      return {
        ...state,
        data: state.data.map((Posts) =>
        Posts._id === action.payload._id ? action.payload : Posts
        ),
      };
    case getType(updatePosts.updatePostsFailure):
      messageError(action.payload);
      return {
        ...state,
        isLoading: true,
        data: [...state.data],
      };
      
    default:
      return state;
  }
}
