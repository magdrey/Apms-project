// https://autopms.onrender.com/api/v1


import axios from "axios";
const APMS_URL = "https://autopms.onrender.com/api/v1"
 
/**
 * Axios instance without auth
 */
 
export const http = axios.create({
  baseURL: APMS_URL,
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  },
});
 
/**
 * Set token headers
 * @param  token string
 */
 
export const setAuthToken = (token) => {
  if (token != null) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};
 

