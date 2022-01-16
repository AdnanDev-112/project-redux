import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
loggedIn: false,
token: 0
}




export const userProfileSLice = createSlice({
    name:"",
    initialState,
    reducers:{
        userToken:(state)=>{

        }

    }

});

export const {userToken} = userProfileSLice.actions;
export default  userProfileSLice.reducer;