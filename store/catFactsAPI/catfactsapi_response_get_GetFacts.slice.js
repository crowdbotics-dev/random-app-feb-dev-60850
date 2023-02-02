import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const catfactsapi_get_fact_read = createAsyncThunk(
  "catfactsapi_response_get_GetFacts/catfactsapi_get_fact_read",
  async payload => {
    const response = await apiService.catfactsapi_get_fact_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const catfactsapi_response_get_GetFactsSlice = createSlice({
  name: "catfactsapi_response_get_GetFacts",
  initialState,
  reducers: {},
  extraReducers: {
    [catfactsapi_get_fact_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [catfactsapi_get_fact_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [catfactsapi_get_fact_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  catfactsapi_get_fact_read,
  slice: catfactsapi_response_get_GetFactsSlice
}
