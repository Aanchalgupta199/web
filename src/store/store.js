import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./PatientStore";

const store = configureStore({reducer: {
    patient: patientSlice
  }
})

export default store;