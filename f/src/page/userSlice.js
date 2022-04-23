import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

export const Userslice = createSlice({
    name: "user",
    initialState:{
    },
    reducers : {
        setUser: (state, action) => {
            
            return action.payload
            
        },
        logout: state =>{
            return {}
        }
    }
})

export const {setUser,logout} =Userslice.actions
export default Userslice.reducer;
