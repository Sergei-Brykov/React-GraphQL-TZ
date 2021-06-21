import { config } from "../config";

const HOST = config.host;

export const api = {
  signIn() {
    return fetch(HOST + "/api/auth", {
      credentials: "include",
    }).then((res) => res.json());
  },

  logIn(data) {
    return fetch(HOST + "/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },

  registration(data) {
    return fetch(HOST + "/api/registration", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },

  logOut() {
    return fetch(HOST + "/api/logout", {
      method: "DELETE",
      credentials: "include",
    });
  },
};
