import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const datausaapi_get_data_read = createAsyncThunk(
  "datausaapi_response_get_GetData/datausaapi_get_data_read",
  async payload => {
    const response = await apiService.datausaapi_get_data_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const datausaapi_response_get_GetDataSlice = createSlice({
  name: "datausaapi_response_get_GetData",
  initialState,
  reducers: {},
  extraReducers: {
    [datausaapi_get_data_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [datausaapi_get_data_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [datausaapi_get_data_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  datausaapi_get_data_read,
  slice: datausaapi_response_get_GetDataSlice
}
