import axios from "axios";

const API_URL = "https://backend-kide.herokuapp.com/api/";

class Auth {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("jwt", JSON.stringify(response.data.accessToken));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
  }

  register(username, password, role) {
    return axios.post(API_URL + "signup", {
      username,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
    ;
  }
}

export default new Auth();
