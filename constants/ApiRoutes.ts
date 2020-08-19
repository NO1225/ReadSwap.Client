const API_URL = "http://192.168.1.100:5000"
export default {
  checkEmail: API_URL + "/api/Auth/CheckEmailExists",
  signUp: API_URL + "/api/Auth/SignUp",
};
