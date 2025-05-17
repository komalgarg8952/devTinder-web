import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addFeeds:(state,action)=>action.payload,
        removeFeeds:(state,action)=>{
            const newArray = state.filter((feed)=>feed._id!==action.payload);
            return newArray;
        }
    }
});

export const { addFeeds,removeFeeds} = feedSlice.actions;

export default feedSlice.reducer;