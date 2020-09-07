const API_URL = "http://192.168.43.73:5000"
export default {
  checkEmail: API_URL + "/api/Auth/CheckEmailExists",
  signUp: API_URL + "/api/Auth/SignUp",
  signIn: API_URL + "/api/Auth/SignIn",
  changePassword: API_URL + "/api/Auth/ChangePassword",

  refreshToken: API_URL + "/api/Token/Refresh",

  getMyProfile: API_URL + "/api/Profile/GetMyProfile",
  createMyProfile: API_URL + "/api/Profile/CreateMyProfile",
  EditMyProfile: API_URL + "/api/Profile/EditMyProfile",
};
