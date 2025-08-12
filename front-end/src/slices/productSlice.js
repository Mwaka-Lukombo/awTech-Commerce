import { productService } from "../services/productService";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//initial State
const initialState = {
    products:[],
    loading:false,
    success:false,
    error:false,
    message:''
}



//create asyncThunk
export const getProducts = createAsyncThunk('products/get', async(_,thunkAPI)=>{
     const data = await productService.getProducts();

     if(data.errors){
        return thunkAPI.rejectWithValue(data.errors[0]);
     };

     return data;
})



//create Slice
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        reset:(state)=>{
            state.products = [];
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = ''
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending, (state)=>{
            state.loading = true;
            state.error = false;
        }).addCase(getProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.success = true;
            state.products = action.payload
            state.message = action.payload.message
        })
    }
})


export const {reset} = productSlice.actions;
export default productSlice.reducer







