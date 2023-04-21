import { createSlice } from "@reduxjs/toolkit"

const initialState = {data:[]};

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        patientData(state, action){
            state.data = action.payload
        }
    }
})


export default patientSlice.reducer;

export const { patientData } = patientSlice.actions;