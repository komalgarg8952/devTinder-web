import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeeds:(state,action)=>action.payload,
        removeFeeds:(state,action)=>null
    }
});

export const { addFeeds,removeFeeds} = feedSlice.actions;

export default feedSlice.reducer;