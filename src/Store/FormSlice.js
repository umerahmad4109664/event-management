import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: [],
    transferData:[],
  },
  reducers: {
    transferFormData:(state,data)=>{
console.log("selected data in slice",data.payload)
state.transferData = data.payload; // Corrected the state update
},
    setFormData: (state, action) => {
        console.log("payload in slice",action.payload)
        state.formData.push(action.payload); // Add a new item to the items array
      },
  },
});

export const { setFormData,transferFormData } = formSlice.actions;

export default formSlice.reducer;
