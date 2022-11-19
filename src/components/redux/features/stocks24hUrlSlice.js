import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStocks24hUrl = createAsyncThunk("stocks24hUrl/getData", async (url, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        rejectWithValue(error.response.data);
    }
})

const stocks24hUrlSlice = createSlice({
    name: "stocks24hUrl",
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStocks24hUrl.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
});

export default stocks24hUrlSlice;