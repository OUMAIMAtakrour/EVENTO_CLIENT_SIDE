import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../helpers/axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/events");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const saveEvent = createAsyncThunk(
  "events/saveEvent",
  async (event, { rejectWithValue, getState }) => {
    try {
      const response = event.id
        ? await axiosClient.put(`/events/${event.id}`, event)
        : await axiosClient.post("/events", event);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id, { rejectWithValue }) => {
    try {
      await axiosClient.delete(`/events/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(saveEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveEvent.fulfilled, (state, action) => {
        const index = state.events.findIndex((e) => e.id === action.payload.id);
        if (index >= 0) {
          state.events[index] = action.payload;
        } else {
          state.events.push(action.payload);
        }
        state.loading = false;
      })
      .addCase(saveEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(
          (event) => event.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
