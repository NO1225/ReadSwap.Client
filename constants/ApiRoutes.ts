const API_URL = "http://192.168.43.73:5000"
export default {
  checkEmail: API_URL + "/api/Auth/CheckEmailExists",
  signUp: API_URL + "/api/Auth/SignUp",
  signIn: API_URL + "/api/Auth/SignIn",
  refreshToken: API_URL + "/api/Token/Refresh",
};
