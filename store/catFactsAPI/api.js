import axios from "axios"
const catFactsAPI = axios.create({
  baseURL: "https://catfact.ninja",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function catfactsapi_get_fact_read(payload) {
  return catFactsAPI.get(`/fact`)
}
export const apiService = { catfactsapi_get_fact_read }
