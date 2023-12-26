import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/auth";
import { UserProfile } from "../models/profile";

export interface LoginState {
  fetching: boolean;
  isAuth: boolean;
  profile: UserProfile;
}
const initialState: LoginState = {
  fetching: false,
  isAuth: false,
  profile: {
    id: 0, // Thay thế giá trị mặc định bằng giá trị mong muốn
    userName: "",
    fullName: "",
    email: "",
    phoneNumber: null, // hoặc thay thế bằng giá trị mặc định khác
    roles: [],
    company: "", // hoặc thay thế bằng giá trị mặc định khác
  },
};

interface Action {
  type: string;
  payload: any;
}

export const authReducer = (
  state: LoginState = initialState,
  action: Action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        fetching: true,
        isAuth: false,
        profile: null,
      };
    case LOGIN_SUCCESS:
      return {
        fetching: false,
        isAuth: true,
        profile: action.payload.data,
      };
    case LOGIN_FAILED:
      return {
        fetching: false,
        isAuth: false,
        profile: null,
      };
    default:
      return state;
  }
};
export default authReducer;
