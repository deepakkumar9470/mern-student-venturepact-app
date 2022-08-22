import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {url} from '../api'

import toast from 'react-hot-toast'

const initialState = {
  items : [],
  status :null,
  createStatus : null,
}



export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
   async (values) =>{
    try {
      const res = await axios.post(`${url}/transactions/add`, values);
      toast.success('Transaction details added Successfully')
      return res.data
    } catch (error) {
      toast.error(error.res?.data)
    }
   }

)



 const transactionSlice = createSlice({
    name : 'transactions',
    initialState,
    reducers :{},
    
    extraReducers : {
       [addTransaction.pending] : (state, action) =>{
        state.createStatus = "pending"
        },
        [addTransaction.fulfilled] : (state, action) =>{
          state.items.push(action.payload)
          state.createStatus = "success"
        },
        [addTransaction.rejected] : (state, action) =>{
          state.createStatus = "rejected"
        
        },

             
    }

})

export default transactionSlice.reducer