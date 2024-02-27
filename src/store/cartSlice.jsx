import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartitem:[]
    },
    reducers:{
        Addtocart:(state,action)=>{
            state.cartitem.push(action.payload);

        }
    }
})
export default cartSlice.reducer;
export const {Addtocart}=cartSlice.actions
