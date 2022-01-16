import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import baseAPI from "../../api/baseAPI";

const initialState = {

    profiles:{}
}

export const fetchCatProfiles = createAsyncThunk('profiles/categories', async ()=>{
    const resp = await baseAPI.get("categories");
    console.log(resp.data)
    return (resp.data);
})


export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
       
    },
    extraReducers:{
        [fetchCatProfiles.fulfilled]:(state,{payload})=>{
            return {...state , profiles:payload}
        }
    }

});

// export const {userToken} = categoriesSlice.actions;
export const getAllProfiles = (state) => state.profiles
export default  categoriesSlice.reducer;