import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: [null],
  },
  reducers: {
    setFormData: (state, action) => {
        console.log("payload in slice",action.payload)
        state.formData = [...state.formData, action.payload];
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
