import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;
export const fetchApikey = createAsyncThunk(
  "chello/getApikey",
  async (email) => {
    const response = await axios.get(`${apiUrl}/api-key?email=${email}`);
    return response.data;
  }
);

const chelloReducer = createSlice({
  name: "chello",
  initialState: {
    value: null,
    inputEmail: "",
    apiKey: JSON.parse(localStorage.getItem("apiKey")) || false,
    isLoading: null,
  },
  reducers: {
    getEmail: (state, action) => {
      return { ...state, inputEmail: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApikey.pending, (state) => {
        toast("Vui lòng chờ");
        state.isLoading = true;
      })
      .addCase(fetchApikey.fulfilled, (state, action) => {
        toast("Đăng nhập thành công");
        // console.log(action.payload.data);
        state.isLoading = false;
        state.apiKey = action.payload.data.apiKey;
        localStorage.setItem(
          "apiKey",
          JSON.stringify(action.payload.data.apiKey)
        );
      })
      .addCase(fetchApikey.rejected, (state) => {
        toast("Đang nhập thất bại");
      });
  },
});

export const { setLogin, getEmail } = chelloReducer.actions;
export default chelloReducer.reducer;
