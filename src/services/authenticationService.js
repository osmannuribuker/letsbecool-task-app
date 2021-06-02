import Cookies from "universal-cookie";

const cookies = new Cookies();

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/token`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.detail) {
        alert("Kullanıcı adı veya şifre yanlış");
      } else {
        cookies.set("authorization", json.access, { path: "/" });
      }
      return json;
    });
};

export const currentUserService = (request) => {
  const CURRENT_USER_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/token/verify`;
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
  };

  return fetch(CURRENT_USER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
