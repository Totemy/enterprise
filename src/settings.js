import axios from "axios";

export const apiUrl = 'https://localhost/'; //https://webtest.it.ua/testApp/api/

export const apiClient = axios.create({
    baseURL: apiUrl,
    /*headers: { "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",} */
});