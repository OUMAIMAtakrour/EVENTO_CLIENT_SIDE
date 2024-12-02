import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../helpers/axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/events");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch events");
    }
  }
);

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (eventData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/events", {
        title: eventData.title,
        description: eventData.description || "",
        members: eventData.members || [],
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create event");
    }
  }
);

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async ({ id, eventData }, { rejectWithValue }) => {
    try {
      const response = await axiosClient.patch(`/events/${id}`, {
        title: eventData.title,
        description: eventData.description || "",
        members: eventData.members || [],
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update event");
    }
  }
);
export const fetchEventById = createAsyncThunk(
  "events/fetchEventById",
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch event");
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
      return rejectWithValue(error.response?.data || "Failed to delete event");
    }
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    loading: false,
    error: null,
    currentEvent: null,
  },
  reducers: {
    setCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
    clearCurrentEvent: (state) => {
      state.currentEvent = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
 
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
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
      .addCase(createEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
        state.loading = false;
        state.currentEvent = null;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  
    builder
      .addCase(updateEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        const index = state.events.findIndex(
          (event) => event._id === action.payload._id
        );
        if (index !== -1) {
          state.events[index] = action.payload;
        }
        state.loading = false;
        state.currentEvent = null;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  builder
    .addCase(fetchEventById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchEventById.fulfilled, (state, action) => {
      state.currentEvent = action.payload;
      state.loading = false;
    })
    .addCase(fetchEventById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.currentEvent = null;
    });
   
    builder
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(
          (event) => event._id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentEvent, clearCurrentEvent, clearError } =
  eventsSlice.actions;

export default eventsSlice.reducer;
