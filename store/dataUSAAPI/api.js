import axios from "axios";
const dataUSAAPI = axios.create({
  baseURL: "https://datausa.io/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function datausaapi_get_data_read(payload) {
  return dataUSAAPI.get(`/data`, {
    params: {
      drilldowns: payload.drilldowns,
      measures: payload.measures
    }
  });
}

export const apiService = {
  datausaapi_get_data_read
};