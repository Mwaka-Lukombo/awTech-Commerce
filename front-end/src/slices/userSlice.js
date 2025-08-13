import { userService } from "../services/userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));


const initialState ={
    user: user ? user : null,
    loading:false,
    success:false,
    error:false,
    message:''
}


//create AsyncThunk
export const register = createAsyncThunk('user/register', async(dataUser,thunkAPI)=>{
    const res = await userService.register(dataUser);
      const data = await res.json();

      if(data.errors){
         return thunkAPI.rejectWithValue(data.errors[0])
      }

      if(data._id){
           localStorage.setItem("user",JSON.stringify(data));
        }

      return data;
})

//create Slice
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        reset:(state)=>{
            state.loading = false;
            state.success = false;
            state.error = false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(register.pending,(state)=>{
            state.loading = true;
            state.error = false;
        }).addCase(register.fulfilled, (state,action)=>{
            state.loading = false;
            state.success = true;
            state.user = action.payload;
            state.message = action.payload.message
        }).addCase(register.rejected, (state,action)=>{
            state.loading = false;
            state.error = true;
            state.message = action.payload;
            state.user = null ;
        })
    }
})


export const {reset} = userSlice.actions;
export default userSlice.reducer



