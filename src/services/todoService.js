import Cookies from "universal-cookie";

const cookies = new Cookies();

export const allTodoService = (request) => {
  const ALL_TODO_ENPOINT = `${process.env.REACT_APP_API_URL}/todos`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
  };

  return fetch(ALL_TODO_ENPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const getTodoService = (request) => {
  const GET_TODO_ENDPOINT = `${process.env.REACT_APP_API_URL}/todo/${request.pk}`;

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
  };

  return fetch(GET_TODO_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const createTodoService = (request) => {
  const CREATE_TODO_ENDPOINT = `${process.env.REACT_APP_API_URL}/todo`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
    body: JSON.stringify(request.todo),
  };

  return fetch(CREATE_TODO_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        return response.json();
      } else {
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const updateTodoService = (request) => {
  const UPDATE_TODO_ENDPOINT = `${process.env.REACT_APP_API_URL}/todo/${request.pk}`;

  const parameters = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
    body: JSON.stringify(request.todo),
  };

  return fetch(UPDATE_TODO_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        return response.json();
      } else {
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteTodoService = (request) => {
  const DELETE_TODO_ENDPOINT = `${process.env.REACT_APP_API_URL}/todo/${request.pk}`;

  const parameters = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("authorization")}`,
    },
  };

  return fetch(DELETE_TODO_ENDPOINT, parameters)
    .then((response) => {
      if (response.status >= 200 && response.status <= 399) {
        return response;
      } else {
        throw response;
      }
    })
    .catch((error) => {
      throw error;
    });
};
