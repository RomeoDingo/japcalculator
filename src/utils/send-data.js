import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BACK_URL;
export const sendData = (kcal) => () => {
  axios.post(API_BASE_URL + `save-db`, { kcal: kcal });
};