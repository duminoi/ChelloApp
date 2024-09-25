import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const initialState = {
  tasks: [],
  columns: [],
  isLoading: null,
};

export const fetchTasks = createAsyncThunk("tasks/getTasks", async (apiKey) => {
  try {
    const response = await axios.get(`${apiUrl}/tasks`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    return response.data;
  } catch (e) {}
});

export const postTasks = createAsyncThunk("tasks/postTasks", async (data) => {
  const { apiKey, data: info } = data;
  try {
    const response = await axios.post(`${apiUrl}/tasks`, info, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    // console.log((await response).data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

const taskReducer = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("action", action.payload.data);
        const { tasks, columns } = action.payload.data;
        if (state.tasks.length === 0 && state.columns.length === 0) {
          state.tasks.push(...tasks);
          state.columns.push(...columns);
        }
      }),
      builder.addCase(postTasks.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(postTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload", action.payload.data);
        const { tasks, columns } = action.payload.data;
        state.tasks = [...tasks];
        state.columns = [...columns];
      });
  },
});

export default taskReducer.reducer;
