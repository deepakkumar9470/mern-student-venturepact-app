import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {url} from '../api'

import toast from 'react-hot-toast'

const initialState = {
  items : [],
  status :null,
  createStatus : null,
}



export const addFees = createAsyncThunk(
  "fees/addFees",
   async (values) =>{
    try {
      const res = await axios.post(`${url}/fee/add`, values);
      toast.success('Fee added Successfully')
      return res.data
    } catch (error) {
      toast.error(error.res?.data)
    }
   }

)



 const feeSlice = createSlice({
    name : 'fees',
    initialState,
    reducers :{},
    
    extraReducers : {
       [addFees.pending] : (state, action) =>{
        state.createStatus = "pending"
        },
        [addFees.fulfilled] : (state, action) =>{
          state.items.push(action.payload)
          state.createStatus = "success"
        },
        [addFees.rejected] : (state, action) =>{
          state.createStatus = "rejected"
        
        },

             
    }

})

export default feeSlice.reducer