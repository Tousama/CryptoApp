import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStocksDepth = createAsyncThunk("stocksDepth/getData", async (url, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(url);
        return data;
    }
    catch (error) {
        rejectWithValue(error.response.data);
    }
})

const stocksDepthSlice = createSlice({
    name: "stocksDepth",
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStocksDepth.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
});

export default stocksDepthSlice;