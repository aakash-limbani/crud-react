import axios from "axios";
import { startsWith } from "lodash";

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const url = (path, params) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map((section) =>
    startsWith(section, "/") ? section : params[section],
  );
  const pathWithParams = sectionsWithParams.join("");
  return process.env.REACT_APP_API_URL + pathWithParams;
};

const getHeaders = () => {
  let headers = { ...defaultHeaders };
  return headers;
};

const apiService = axios.create({});

// export const get = (path, params = {}, auth = true) => apiService.get(url(path, params), { params, headers: getHeaders(auth) });
//edit
export const get = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), { params, headers: getHeaders(auth) });

export const post = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, { headers: getHeaders(auth) });

export const put = (path, params = {}, auth = true) =>
  apiService.put(url(path, params), params, { headers: getHeaders(auth) });

export const patch = (path, params = {}, auth = true) =>
  apiService.patch(url(path, params), params, { headers: getHeaders(auth) });

export const deleteRequest = (path, params = {}, auth = true) =>
  apiService.delete(url(path, params), { headers: getHeaders(auth) }, params);

export const upload = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, {
    headers: { ...getHeaders(auth), "content-type": "multipart/form-data" },
  });

export const download = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), {
    responseType: "blob",
    params,
    headers: getHeaders(auth),
  });

apiService.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // toast.error(error.response.data.message);
    }

    if (error && error.response && error.response.status === 401) {
      window.location.href = "/";
    } else {
      return Promise.reject(error.response);
    }
    return Promise.reject(error.response);
  },
);
