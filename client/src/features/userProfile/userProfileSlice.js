import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}




export const userProfileSLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userStatus: (state) => {
            state.loggedIn = !state.loggedIn
        }

    }

});

export const { userStatus } = userProfileSLice.actions;
export const userLogged = (state) => state.user.loggedIn;
export default userProfileSLice.reducer;