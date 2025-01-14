import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem("userLoginInfo")?JSON.parse(localStorage.getItem("userLoginInfo")):""
}

export const adminSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    adminInfo:(state, action)=>{
           state.userInfo=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { adminInfo} = adminSlice.actions

export default adminSlice.reducer