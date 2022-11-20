import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStocksHistoricalData = createAsyncThunk("stocksHistoricalData/getData", async (url, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(url);
        /* console.log(url); */
        return data;
    }
    catch (error) {
        rejectWithValue(error.response.data);
    }
})


const stocksHistoricalDataSlice = createSlice({
    name: "stocksHistoricalData",
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStocksHistoricalData.fulfilled, (state, action) => {
            state.data = action.payload;
            /* console.log(action.meta); */
        })
    },
});

export default stocksHistoricalDataSlice;