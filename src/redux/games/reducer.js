import { createSlice } from "@reduxjs/toolkit";

const gamesSLice = createSlice({
  name: "games",
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSLice.actions;
export default gamesSLice.reducer;
