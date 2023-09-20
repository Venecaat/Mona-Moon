import axios from "axios";
import { API_URL } from "../config/index.jsx";

export class UsersApi {
    constructor() {
        if (this instanceof UsersApi) {
            throw Error('A static class cannot be instantiated.');
        }
    }
     static async getAllUser() {
        const res = await axios.get(`${API_URL}/User`, { withCredentials : true });
        return await res.data;
    }

    static async register(lastName, firstName, email, password) {
        let errorMsg = "";
        let errorStatusCode;

        const res = await axios.post(`${API_URL}/User/Register`, {
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: password
        }, { withCredentials : true })
            .catch(error => {
                errorStatusCode = error.response.status;
                errorMsg = error.response.data;
            });

        return {
            status: errorMsg ? errorStatusCode : res.status,
            newUser: errorMsg ? null : res.data,
            errorMsg: errorMsg ? errorMsg : null
        };
    }

    static async login(email, password) {
        let errorMsg = "";
        let errorStatusCode;

        const res = await axios.post(`${API_URL}/User/Login`, {
            email: email,
            password: password
        }, { withCredentials : true })
            .catch(error => {
                errorStatusCode = error.response.status;
                errorMsg = error.response.data;
            });

        return {
            status: errorMsg ? errorStatusCode : res.status,
            user: errorMsg ? null : res.data,
            errorMsg: errorMsg ? errorMsg : null
        };
    }
}