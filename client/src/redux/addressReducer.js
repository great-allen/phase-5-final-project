import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [],
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addToAddress: (state, action) => {
        if (state.addresses.length === 0) {
          state.addresses.push(action.payload);
        } else {
          state.addresses.shift();
          state.addresses.push(action.payload);
        }
      },
    
    resetAddress: (state) => {
      state.addresses = []
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToAddress,resetAddress } = addressSlice.actions;

export default addressSlice.reducer;