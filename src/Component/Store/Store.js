import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from '../AdminInfo/AdminInfo'

export const store = configureStore({
  reducer: {
    details:adminSlice
  },
})
