import axios from "axios";

const API_URL = "https://backend-kide.herokuapp.com/api/signin";

class Auth {
    login(username, password) {
        return axios
            .post("https://backend-kide.herokuapp.com/api/signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("avatar");
    }

    register(username, password, role) {
        return axios.post("https://backend-kide.herokuapp.com/api/signup", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new Auth();
