import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchResturents  = createAsyncThunk("resturents/fetchResturents",async()=>{
    const result = await axios.get("https://resturent-server-udmo.onrender.com/restaurants")
    return result.data
}) 

const resturentSlice = createSlice({
    name:"resturents",
    initialState:{
        allResturents:[],
        allResturentsDummy:[],
        loading:false,
        error:''
    },
    reducers:{
            searchResturant : (state,action)=>{
               state.allResturents = state.allResturentsDummy.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
            }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturents.fulfilled,(state,action)=>{
            state.allResturents = action.payload
            state.allResturentsDummy = action.payload
            state.loading = false
            state.error = ''
        })
        builder.addCase(fetchResturents.pending,(state,action)=>{
            state.allResturents = []
            state.allResturentsDummy = []
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchResturents.rejected,(state,action)=>{
            state.allResturents = []
            state.allResturentsDummy = []
            state.loading = false
            state.error = "API call failed"
    })
    }
})

export const {searchResturant} = resturentSlice.actions
export default resturentSlice.reducer