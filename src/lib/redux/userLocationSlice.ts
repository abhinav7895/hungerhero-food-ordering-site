import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { locationType } from "../../types";

const initialState: locationType = {
  latitude: 25.9462838,
  longitude: 83.5610119,
  city: "Mau",
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<locationType>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.city = action.payload.city;
    },
  },
});

export const { setLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
